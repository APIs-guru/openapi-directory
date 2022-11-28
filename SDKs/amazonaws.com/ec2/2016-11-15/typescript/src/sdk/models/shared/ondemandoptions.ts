import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetOnDemandAllocationStrategyEnum } from "./fleetondemandallocationstrategyenum";
import { CapacityReservationOptions } from "./capacityreservationoptions";



// OnDemandOptions
/** 
 * Describes the configuration of On-Demand Instances in an EC2 Fleet.
**/
export class OnDemandOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationStrategy?: FleetOnDemandAllocationStrategyEnum;

  @SpeakeasyMetadata()
  capacityReservationOptions?: CapacityReservationOptions;

  @SpeakeasyMetadata()
  maxTotalPrice?: string;

  @SpeakeasyMetadata()
  minTargetCapacity?: number;

  @SpeakeasyMetadata()
  singleAvailabilityZone?: boolean;

  @SpeakeasyMetadata()
  singleInstanceType?: boolean;
}
