import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Describes the configuration of a Spot Fleet request.
**/
export declare class SpotFleetRequestConfigData extends SpeakeasyBase {
    allocationStrategy?: AllocationStrategyEnum;
    clientToken?: string;
    context?: string;
    excessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicyEnum;
    fulfilledCapacity?: number;
    iamFleetRole: string;
    instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;
    instancePoolsToUseCount?: number;
    launchSpecifications?: SpotFleetLaunchSpecification[];
    launchTemplateConfigs?: LaunchTemplateConfig[];
    loadBalancersConfig?: LoadBalancersConfig;
    onDemandAllocationStrategy?: OnDemandAllocationStrategyEnum;
    onDemandFulfilledCapacity?: number;
    onDemandMaxTotalPrice?: string;
    onDemandTargetCapacity?: number;
    replaceUnhealthyInstances?: boolean;
    spotMaintenanceStrategies?: SpotMaintenanceStrategies;
    spotMaxTotalPrice?: string;
    spotPrice?: string;
    tagSpecifications?: TagSpecification[];
    targetCapacity: number;
    terminateInstancesWithExpiration?: boolean;
    type?: FleetTypeEnum;
    validFrom?: Date;
    validUntil?: Date;
}
