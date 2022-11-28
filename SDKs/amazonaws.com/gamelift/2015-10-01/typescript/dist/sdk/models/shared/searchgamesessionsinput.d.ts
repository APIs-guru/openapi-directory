import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class SearchGameSessionsInput extends SpeakeasyBase {
    aliasId?: string;
    filterExpression?: string;
    fleetId?: string;
    limit?: number;
    location?: string;
    nextToken?: string;
    sortExpression?: string;
}
