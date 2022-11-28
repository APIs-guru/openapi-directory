import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";



// SearchGameSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class SearchGameSessionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessions", elemType: GameSession })
  gameSessions?: GameSession[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
