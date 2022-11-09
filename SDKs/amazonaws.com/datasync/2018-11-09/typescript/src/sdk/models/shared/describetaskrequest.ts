import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTaskRequest
/** 
 * DescribeTaskRequest
**/
export class DescribeTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskArn" })
  taskArn: string;
}
