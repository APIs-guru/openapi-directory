import { SpeakeasyBase } from "../../../internal/utils";
import { SpotAllocationStrategyEnum } from "./spotallocationstrategyenum";
import { SpotInstanceInterruptionBehaviorEnum } from "./spotinstanceinterruptionbehaviorenum";
import { FleetSpotMaintenanceStrategies } from "./fleetspotmaintenancestrategies";
/**
 * Describes the configuration of Spot Instances in an EC2 Fleet.
**/
export declare class SpotOptions extends SpeakeasyBase {
    allocationStrategy?: SpotAllocationStrategyEnum;
    instanceInterruptionBehavior?: SpotInstanceInterruptionBehaviorEnum;
    instancePoolsToUseCount?: number;
    maintenanceStrategies?: FleetSpotMaintenanceStrategies;
    maxTotalPrice?: string;
    minTargetCapacity?: number;
    singleAvailabilityZone?: boolean;
    singleInstanceType?: boolean;
}
