import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterConfiguration } from "./clusterconfiguration";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterSetting } from "./clustersetting";
import { Tag } from "./tag";


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @Metadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=settings", elemType: shared.ClusterSetting })
  settings?: ClusterSetting[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
