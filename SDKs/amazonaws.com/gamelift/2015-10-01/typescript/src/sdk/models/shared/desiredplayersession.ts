import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DesiredPlayerSession
/** 
 * Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
**/
export class DesiredPlayerSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlayerData" })
  playerData?: string;

  @Metadata({ data: "json, name=PlayerId" })
  playerId?: string;
}
