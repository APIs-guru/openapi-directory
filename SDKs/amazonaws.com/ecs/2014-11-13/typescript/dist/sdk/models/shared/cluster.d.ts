import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { ClusterConfiguration } from "./clusterconfiguration";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterSetting } from "./clustersetting";
import { KeyValuePair } from "./keyvaluepair";
import { Tag } from "./tag";
/**
 * A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
**/
export declare class Cluster extends SpeakeasyBase {
    activeServicesCount?: number;
    attachments?: Attachment[];
    attachmentsStatus?: string;
    capacityProviders?: string[];
    clusterArn?: string;
    clusterName?: string;
    configuration?: ClusterConfiguration;
    defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
    pendingTasksCount?: number;
    registeredContainerInstancesCount?: number;
    runningTasksCount?: number;
    settings?: ClusterSetting[];
    statistics?: KeyValuePair[];
    status?: string;
    tags?: Tag[];
}
