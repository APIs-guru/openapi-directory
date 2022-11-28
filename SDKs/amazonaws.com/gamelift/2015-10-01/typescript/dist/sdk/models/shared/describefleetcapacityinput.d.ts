import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeFleetCapacityInput extends SpeakeasyBase {
    fleetIds?: string[];
    limit?: number;
    nextToken?: string;
}
