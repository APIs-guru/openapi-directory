import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class CreatePlayerSessionsOutput extends SpeakeasyBase {
    playerSessions?: PlayerSession[];
}
