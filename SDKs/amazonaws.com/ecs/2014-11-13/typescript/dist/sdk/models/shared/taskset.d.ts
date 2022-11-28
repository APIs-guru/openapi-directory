import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { StabilityStatusEnum } from "./stabilitystatusenum";
import { Tag } from "./tag";
/**
 * Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
**/
export declare class TaskSet extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    clusterArn?: string;
    computedDesiredCount?: number;
    createdAt?: Date;
    externalId?: string;
    id?: string;
    launchType?: LaunchTypeEnum;
    loadBalancers?: LoadBalancer[];
    networkConfiguration?: NetworkConfiguration;
    pendingCount?: number;
    platformVersion?: string;
    runningCount?: number;
    scale?: Scale;
    serviceArn?: string;
    serviceRegistries?: ServiceRegistry[];
    stabilityStatus?: StabilityStatusEnum;
    stabilityStatusAt?: Date;
    startedBy?: string;
    status?: string;
    tags?: Tag[];
    taskDefinition?: string;
    taskSetArn?: string;
    updatedAt?: Date;
}
