import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterSettingNameEnum } from "./clustersettingnameenum";


// ClusterSetting
/** 
 * The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
**/
export class ClusterSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: ClusterSettingNameEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
