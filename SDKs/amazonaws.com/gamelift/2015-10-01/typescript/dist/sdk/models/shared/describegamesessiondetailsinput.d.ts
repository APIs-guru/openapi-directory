import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeGameSessionDetailsInput extends SpeakeasyBase {
    aliasId?: string;
    fleetId?: string;
    gameSessionId?: string;
    limit?: number;
    location?: string;
    nextToken?: string;
    statusFilter?: string;
}
