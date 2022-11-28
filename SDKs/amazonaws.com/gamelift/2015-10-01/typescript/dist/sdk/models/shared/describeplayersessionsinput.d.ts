import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribePlayerSessionsInput extends SpeakeasyBase {
    gameSessionId?: string;
    limit?: number;
    nextToken?: string;
    playerId?: string;
    playerSessionId?: string;
    playerSessionStatusFilter?: string;
}
