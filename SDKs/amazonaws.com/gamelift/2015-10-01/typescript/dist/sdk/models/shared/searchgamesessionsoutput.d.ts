import { SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class SearchGameSessionsOutput extends SpeakeasyBase {
    gameSessions?: GameSession[];
    nextToken?: string;
}
