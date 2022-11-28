import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeFleetUtilizationInput extends SpeakeasyBase {
    fleetIds?: string[];
    limit?: number;
    nextToken?: string;
}
