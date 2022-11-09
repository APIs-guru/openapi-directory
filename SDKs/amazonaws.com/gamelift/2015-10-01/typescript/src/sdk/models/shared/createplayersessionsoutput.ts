import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerSession } from "./playersession";


// CreatePlayerSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreatePlayerSessionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlayerSessions", elemType: shared.PlayerSession })
  playerSessions?: PlayerSession[];
}
