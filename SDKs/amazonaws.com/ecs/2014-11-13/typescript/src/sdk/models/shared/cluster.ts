import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=activeServicesCount" })
  activeServicesCount?: number;

  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=attachmentsStatus" })
  attachmentsStatus?: string;

  @Metadata({ data: "json, name=capacityProviders" })
  capacityProviders?: string[];

  @Metadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @Metadata({ data: "json, name=defaultCapacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=pendingTasksCount" })
  pendingTasksCount?: number;

  @Metadata({ data: "json, name=registeredContainerInstancesCount" })
  registeredContainerInstancesCount?: number;

  @Metadata({ data: "json, name=runningTasksCount" })
  runningTasksCount?: number;

  @Metadata({ data: "json, name=settings", elemType: shared.ClusterSetting })
  settings?: ClusterSetting[];

  @Metadata({ data: "json, name=statistics", elemType: shared.KeyValuePair })
  statistics?: KeyValuePair[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
