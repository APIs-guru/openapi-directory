import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteGameSessionQueueInput
/** 
 * Represents the input for a request operation. 
**/
export class DeleteGameSessionQueueInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
