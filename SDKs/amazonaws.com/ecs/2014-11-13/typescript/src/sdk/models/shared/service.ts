import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { DeploymentController } from "./deploymentcontroller";
import { Deployment } from "./deployment";
import { ServiceEvent } from "./serviceevent";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";
import { TaskSet } from "./taskset";



// Service
/** 
 * Details on a service within a cluster
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfiguration" })
  deploymentConfiguration?: DeploymentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=deploymentController" })
  deploymentController?: DeploymentController;

  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: Deployment })
  deployments?: Deployment[];

  @SpeakeasyMetadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=enableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ServiceEvent })
  events?: ServiceEvent[];

  @SpeakeasyMetadata({ data: "json, name=healthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @SpeakeasyMetadata({ data: "json, name=placementStrategy", elemType: PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: PropagateTagsEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=schedulingStrategy" })
  schedulingStrategy?: SchedulingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceArn" })
  serviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=taskSets", elemType: TaskSet })
  taskSets?: TaskSet[];
}
