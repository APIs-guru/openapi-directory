import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeFleetLocationAttributesInput extends SpeakeasyBase {
    fleetId: string;
    limit?: number;
    locations?: string[];
    nextToken?: string;
}
