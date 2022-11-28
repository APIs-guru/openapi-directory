import { SpeakeasyBase } from "../../../internal/utils";
import { SpotCapacityRebalance } from "./spotcapacityrebalance";
/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
**/
export declare class SpotMaintenanceStrategies extends SpeakeasyBase {
    capacityRebalance?: SpotCapacityRebalance;
}
