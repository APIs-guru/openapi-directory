import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: DataRepositoryTaskFailureDetails;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle: DataRepositoryTaskLifecycleEnum;

  @Metadata({ data: "json, name=Paths" })
  paths?: string[];

  @Metadata({ data: "json, name=Report" })
  report?: CompletionReport;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: DataRepositoryTaskStatus;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TaskId" })
  taskId: string;

  @Metadata({ data: "json, name=Type" })
  type: DataRepositoryTaskTypeEnum;
}
