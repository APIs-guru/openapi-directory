import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTaskRequest
/** 
 * DeleteTask
**/
export class DeleteTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn: string;
}
