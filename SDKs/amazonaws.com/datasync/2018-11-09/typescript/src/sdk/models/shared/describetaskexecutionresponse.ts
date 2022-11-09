import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterRule } from "./filterrule";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskExecutionResultDetail } from "./taskexecutionresultdetail";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";


// DescribeTaskExecutionResponse
/** 
 * DescribeTaskExecutionResponse
**/
export class DescribeTaskExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BytesTransferred" })
  bytesTransferred?: number;

  @Metadata({ data: "json, name=BytesWritten" })
  bytesWritten?: number;

  @Metadata({ data: "json, name=EstimatedBytesToTransfer" })
  estimatedBytesToTransfer?: number;

  @Metadata({ data: "json, name=EstimatedFilesToTransfer" })
  estimatedFilesToTransfer?: number;

  @Metadata({ data: "json, name=Excludes", elemType: shared.FilterRule })
  excludes?: FilterRule[];

  @Metadata({ data: "json, name=FilesTransferred" })
  filesTransferred?: number;

  @Metadata({ data: "json, name=Includes", elemType: shared.FilterRule })
  includes?: FilterRule[];

  @Metadata({ data: "json, name=Options" })
  options?: Options;

  @Metadata({ data: "json, name=Result" })
  result?: TaskExecutionResultDetail;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TaskExecutionStatusEnum;

  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
