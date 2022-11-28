import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSettingNameEnum } from "./clustersettingnameenum";



// ClusterSetting
/** 
 * The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
**/
export class ClusterSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ClusterSettingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
