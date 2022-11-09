import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTaskRequest
/** 
 * DeleteTask
**/
export class DeleteTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TaskArn" })
  taskArn: string;
}
