import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTaskExecutionRequest
/** 
 * DescribeTaskExecutionRequest
**/
export class DescribeTaskExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn: string;
}
