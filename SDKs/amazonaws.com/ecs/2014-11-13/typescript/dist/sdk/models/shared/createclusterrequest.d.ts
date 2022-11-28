import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterSetting } from "./clustersetting";
import { Tag } from "./tag";
export declare class CreateClusterRequest extends SpeakeasyBase {
    capacityProviders?: string[];
    clusterName?: string;
    configuration?: ClusterConfiguration;
    defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
    settings?: ClusterSetting[];
    tags?: Tag[];
}
