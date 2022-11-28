import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacedPlayerSession
/** 
 * <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <p> <b>Related actions</b> </p> <p> <a>CreatePlayerSession</a> | <a>CreatePlayerSessions</a> | <a>DescribePlayerSessions</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class PlacedPlayerSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessionId" })
  playerSessionId?: string;
}
