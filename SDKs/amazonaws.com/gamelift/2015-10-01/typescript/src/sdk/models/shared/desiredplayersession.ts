import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DesiredPlayerSession
/** 
 * Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
**/
export class DesiredPlayerSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlayerData" })
  playerData?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerId" })
  playerId?: string;
}
