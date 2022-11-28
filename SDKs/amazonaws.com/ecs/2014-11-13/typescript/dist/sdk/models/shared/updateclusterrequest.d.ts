import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterSetting } from "./clustersetting";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    cluster: string;
    configuration?: ClusterConfiguration;
    settings?: ClusterSetting[];
}
