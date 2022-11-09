import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetGameSessionLogUrlInput
/** 
 * Represents the input for a request operation.
**/
export class GetGameSessionLogUrlInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;
}
