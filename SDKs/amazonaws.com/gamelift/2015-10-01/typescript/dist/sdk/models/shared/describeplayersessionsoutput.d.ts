import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribePlayerSessionsOutput extends SpeakeasyBase {
    nextToken?: string;
    playerSessions?: PlayerSession[];
}
