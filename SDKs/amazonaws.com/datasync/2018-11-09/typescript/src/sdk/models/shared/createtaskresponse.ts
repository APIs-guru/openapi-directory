import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTaskResponse
/** 
 * CreateTaskResponse
**/
export class CreateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn?: string;
}
