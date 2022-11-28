import { SpeakeasyBase } from "../../../internal/utils";
import { FleetCapacity } from "./fleetcapacity";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetCapacityOutput extends SpeakeasyBase {
    fleetCapacity?: FleetCapacity[];
    nextToken?: string;
}
