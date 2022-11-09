import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchedPlayerSession } from "./matchedplayersession";


// GameSessionConnectionInfo
/** 
 * Connection information for a new game session that is created in response to a <a>StartMatchmaking</a> request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.
**/
export class GameSessionConnectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=GameSessionArn" })
  gameSessionArn?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=MatchedPlayerSessions", elemType: shared.MatchedPlayerSession })
  matchedPlayerSessions?: MatchedPlayerSession[];

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
