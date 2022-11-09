import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSession } from "./gamesession";


// SearchGameSessionsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class SearchGameSessionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessions", elemType: shared.GameSession })
  gameSessions?: GameSession[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
