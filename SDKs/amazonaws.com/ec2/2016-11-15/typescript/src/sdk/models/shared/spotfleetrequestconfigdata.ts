import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllocationStrategyEnum } from "./allocationstrategyenum";
import { ExcessCapacityTerminationPolicyEnum } from "./excesscapacityterminationpolicyenum";
import { InstanceInterruptionBehaviorEnum } from "./instanceinterruptionbehaviorenum";
import { SpotFleetLaunchSpecification } from "./spotfleetlaunchspecification";
import { LaunchTemplateConfig } from "./launchtemplateconfig";
import { LoadBalancersConfig } from "./loadbalancersconfig";
import { OnDemandAllocationStrategyEnum } from "./ondemandallocationstrategyenum";
import { SpotMaintenanceStrategies } from "./spotmaintenancestrategies";
import { TagSpecification } from "./tagspecification";
import { FleetTypeEnum } from "./fleettypeenum";



// SpotFleetRequestConfigData
/** 
 * Describes the configuration of a Spot Fleet request.
**/
export class SpotFleetRequestConfigData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationStrategy?: AllocationStrategyEnum;

  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  context?: string;

  @SpeakeasyMetadata()
  excessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicyEnum;

  @SpeakeasyMetadata()
  fulfilledCapacity?: number;

  @SpeakeasyMetadata()
  iamFleetRole: string;

  @SpeakeasyMetadata()
  instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;

  @SpeakeasyMetadata()
  instancePoolsToUseCount?: number;

  @SpeakeasyMetadata({ elemType: SpotFleetLaunchSpecification })
  launchSpecifications?: SpotFleetLaunchSpecification[];

  @SpeakeasyMetadata({ elemType: LaunchTemplateConfig })
  launchTemplateConfigs?: LaunchTemplateConfig[];

  @SpeakeasyMetadata()
  loadBalancersConfig?: LoadBalancersConfig;

  @SpeakeasyMetadata()
  onDemandAllocationStrategy?: OnDemandAllocationStrategyEnum;

  @SpeakeasyMetadata()
  onDemandFulfilledCapacity?: number;

  @SpeakeasyMetadata()
  onDemandMaxTotalPrice?: string;

  @SpeakeasyMetadata()
  onDemandTargetCapacity?: number;

  @SpeakeasyMetadata()
  replaceUnhealthyInstances?: boolean;

  @SpeakeasyMetadata()
  spotMaintenanceStrategies?: SpotMaintenanceStrategies;

  @SpeakeasyMetadata()
  spotMaxTotalPrice?: string;

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata({ elemType: TagSpecification })
  tagSpecifications?: TagSpecification[];

  @SpeakeasyMetadata()
  targetCapacity: number;

  @SpeakeasyMetadata()
  terminateInstancesWithExpiration?: boolean;

  @SpeakeasyMetadata()
  type?: FleetTypeEnum;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validUntil?: Date;
}
