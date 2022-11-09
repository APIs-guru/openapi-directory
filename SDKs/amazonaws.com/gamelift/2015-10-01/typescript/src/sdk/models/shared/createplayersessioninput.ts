import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePlayerSessionInput
/** 
 * Represents the input for a request operation.
**/
export class CreatePlayerSessionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @Metadata({ data: "json, name=PlayerData" })
  playerData?: string;

  @Metadata({ data: "json, name=PlayerId" })
  playerId: string;
}
