import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTaskExecutionRequest
/** 
 * DescribeTaskExecutionRequest
**/
export class DescribeTaskExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
