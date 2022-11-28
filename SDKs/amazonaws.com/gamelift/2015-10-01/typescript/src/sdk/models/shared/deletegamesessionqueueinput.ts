import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteGameSessionQueueInput
/** 
 * Represents the input for a request operation. 
**/
export class DeleteGameSessionQueueInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
