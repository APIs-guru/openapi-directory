import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetGameSessionLogUrlInput
/** 
 * Represents the input for a request operation.
**/
export class GetGameSessionLogUrlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;
}
