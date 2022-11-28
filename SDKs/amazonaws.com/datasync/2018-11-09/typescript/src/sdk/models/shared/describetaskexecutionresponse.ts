import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskExecutionResultDetail } from "./taskexecutionresultdetail";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";



// DescribeTaskExecutionResponse
/** 
 * DescribeTaskExecutionResponse
**/
export class DescribeTaskExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BytesTransferred" })
  bytesTransferred?: number;

  @SpeakeasyMetadata({ data: "json, name=BytesWritten" })
  bytesWritten?: number;

  @SpeakeasyMetadata({ data: "json, name=EstimatedBytesToTransfer" })
  estimatedBytesToTransfer?: number;

  @SpeakeasyMetadata({ data: "json, name=EstimatedFilesToTransfer" })
  estimatedFilesToTransfer?: number;

  @SpeakeasyMetadata({ data: "json, name=Excludes", elemType: FilterRule })
  excludes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=FilesTransferred" })
  filesTransferred?: number;

  @SpeakeasyMetadata({ data: "json, name=Includes", elemType: FilterRule })
  includes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: TaskExecutionResultDetail;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
