import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotAllocationStrategyEnum } from "./spotallocationstrategyenum";
import { SpotInstanceInterruptionBehaviorEnum } from "./spotinstanceinterruptionbehaviorenum";
import { FleetSpotMaintenanceStrategies } from "./fleetspotmaintenancestrategies";



// SpotOptions
/** 
 * Describes the configuration of Spot Instances in an EC2 Fleet.
**/
export class SpotOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationStrategy?: SpotAllocationStrategyEnum;

  @SpeakeasyMetadata()
  instanceInterruptionBehavior?: SpotInstanceInterruptionBehaviorEnum;

  @SpeakeasyMetadata()
  instancePoolsToUseCount?: number;

  @SpeakeasyMetadata()
  maintenanceStrategies?: FleetSpotMaintenanceStrategies;

  @SpeakeasyMetadata()
  maxTotalPrice?: string;

  @SpeakeasyMetadata()
  minTargetCapacity?: number;

  @SpeakeasyMetadata()
  singleAvailabilityZone?: boolean;

  @SpeakeasyMetadata()
  singleInstanceType?: boolean;
}
