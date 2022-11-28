import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskFailureDetails } from "./datarepositorytaskfailuredetails";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
import { CompletionReport } from "./completionreport";
import { DataRepositoryTaskStatus } from "./datarepositorytaskstatus";
import { Tag } from "./tag";
import { DataRepositoryTaskTypeEnum } from "./datarepositorytasktypeenum";



// DataRepositoryTask
/** 
 * A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository.
**/
export class DataRepositoryTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: DataRepositoryTaskFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle: DataRepositoryTaskLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=Paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=Report" })
  report?: CompletionReport;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DataRepositoryTaskStatus;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DataRepositoryTaskTypeEnum;
}
