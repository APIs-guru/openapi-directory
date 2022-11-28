import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePlayerSessionInput
/** 
 * Represents the input for a request operation.
**/
export class CreatePlayerSessionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerData" })
  playerData?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerId" })
  playerId: string;
}
