import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { ClusterConfiguration } from "./clusterconfiguration";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { ClusterSetting } from "./clustersetting";
import { KeyValuePair } from "./keyvaluepair";
import { Tag } from "./tag";



// Cluster
/** 
 * A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeServicesCount" })
  activeServicesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=attachmentsStatus" })
  attachmentsStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=pendingTasksCount" })
  pendingTasksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=registeredContainerInstancesCount" })
  registeredContainerInstancesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=runningTasksCount" })
  runningTasksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ClusterSetting })
  settings?: ClusterSetting[];

  @SpeakeasyMetadata({ data: "json, name=statistics", elemType: KeyValuePair })
  statistics?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
