import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentConfiguration } from "./deploymentconfiguration";
import { DeploymentController } from "./deploymentcontroller";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { SchedulingStrategyEnum } from "./schedulingstrategyenum";
import { ServiceRegistry } from "./serviceregistry";
import { Tag } from "./tag";


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=deploymentConfiguration" })
  deploymentConfiguration?: DeploymentConfiguration;

  @Metadata({ data: "json, name=deploymentController" })
  deploymentController?: DeploymentController;

  @Metadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @Metadata({ data: "json, name=enableECSManagedTags" })
  enableEcsManagedTags?: boolean;

  @Metadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=healthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=loadBalancers", elemType: shared.LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=placementConstraints", elemType: shared.PlacementConstraint })
  placementConstraints?: PlacementConstraint[];

  @Metadata({ data: "json, name=placementStrategy", elemType: shared.PlacementStrategy })
  placementStrategy?: PlacementStrategy[];

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: PropagateTagsEnum;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=schedulingStrategy" })
  schedulingStrategy?: SchedulingStrategyEnum;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=serviceRegistries", elemType: shared.ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;
}
