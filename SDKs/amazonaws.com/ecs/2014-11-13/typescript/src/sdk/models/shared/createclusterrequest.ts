import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterSetting } from "./clustersetting";
import { Tag } from "./tag";



export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ClusterSetting })
  settings?: ClusterSetting[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
