import { SpeakeasyBase } from "../../../internal/utils";
import { FleetSpotCapacityRebalance } from "./fleetspotcapacityrebalance";
/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
**/
export declare class FleetSpotMaintenanceStrategies extends SpeakeasyBase {
    capacityRebalance?: FleetSpotCapacityRebalance;
}
