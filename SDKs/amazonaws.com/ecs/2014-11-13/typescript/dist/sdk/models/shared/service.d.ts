import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { DeploymentController } from "./deploymentcontroller";
import { Deployment } from "./deployment";
import { ServiceEvent } from "./serviceevent";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";
import { TaskSet } from "./taskset";
/**
 * Details on a service within a cluster
**/
export declare class Service extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    clusterArn?: string;
    createdAt?: Date;
    createdBy?: string;
    deploymentConfiguration?: DeploymentConfiguration;
    deploymentController?: DeploymentController;
    deployments?: Deployment[];
    desiredCount?: number;
    enableEcsManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    events?: ServiceEvent[];
    healthCheckGracePeriodSeconds?: number;
    launchType?: LaunchTypeEnum;
    loadBalancers?: LoadBalancer[];
    networkConfiguration?: NetworkConfiguration;
    pendingCount?: number;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    roleArn?: string;
    runningCount?: number;
    schedulingStrategy?: SchedulingStrategyEnum;
    serviceArn?: string;
    serviceName?: string;
    serviceRegistries?: ServiceRegistry[];
    status?: string;
    tags?: Tag[];
    taskDefinition?: string;
    taskSets?: TaskSet[];
}
