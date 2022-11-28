import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSettingNameEnum } from "./clustersettingnameenum";
/**
 * The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
**/
export declare class ClusterSetting extends SpeakeasyBase {
    name?: ClusterSettingNameEnum;
    value?: string;
}
