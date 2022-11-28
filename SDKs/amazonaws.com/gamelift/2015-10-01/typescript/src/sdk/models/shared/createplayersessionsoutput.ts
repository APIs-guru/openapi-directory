import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";



// CreatePlayerSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreatePlayerSessionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlayerSessions", elemType: PlayerSession })
  playerSessions?: PlayerSession[];
}
