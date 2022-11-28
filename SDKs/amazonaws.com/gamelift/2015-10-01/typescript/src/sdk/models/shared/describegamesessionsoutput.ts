import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";



// DescribeGameSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessions", elemType: GameSession })
  gameSessions?: GameSession[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
