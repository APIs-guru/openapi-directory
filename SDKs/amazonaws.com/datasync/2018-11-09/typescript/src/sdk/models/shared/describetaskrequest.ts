import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTaskRequest
/** 
 * DescribeTaskRequest
**/
export class DescribeTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn: string;
}
