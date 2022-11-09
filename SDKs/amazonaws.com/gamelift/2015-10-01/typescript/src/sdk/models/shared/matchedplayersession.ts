import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MatchedPlayerSession
/** 
 * <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>
**/
export class MatchedPlayerSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @Metadata({ data: "json, name=PlayerSessionId" })
  playerSessionId?: string;
}
