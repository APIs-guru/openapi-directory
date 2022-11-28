import { SpeakeasyBase } from "../../../internal/utils";
import { FleetUtilization } from "./fleetutilization";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetUtilizationOutput extends SpeakeasyBase {
    fleetUtilization?: FleetUtilization[];
    nextToken?: string;
}
