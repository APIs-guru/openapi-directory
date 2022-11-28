import { SpeakeasyBase } from "../../../internal/utils";
import { FleetOnDemandAllocationStrategyEnum } from "./fleetondemandallocationstrategyenum";
import { CapacityReservationOptions } from "./capacityreservationoptions";
/**
 * Describes the configuration of On-Demand Instances in an EC2 Fleet.
**/
export declare class OnDemandOptions extends SpeakeasyBase {
    allocationStrategy?: FleetOnDemandAllocationStrategyEnum;
    capacityReservationOptions?: CapacityReservationOptions;
    maxTotalPrice?: string;
    minTargetCapacity?: number;
    singleAvailabilityZone?: boolean;
    singleInstanceType?: boolean;
}
