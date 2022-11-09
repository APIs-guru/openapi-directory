import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { LoadBalancer } from "./loadbalancer";
import { NetworkConfiguration } from "./networkconfiguration";
import { Scale } from "./scale";
import { ServiceRegistry } from "./serviceregistry";
import { StabilityStatusEnum } from "./stabilitystatusenum";
import { Tag } from "./tag";


// TaskSet
/** 
 * Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
**/
export class TaskSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=computedDesiredCount" })
  computedDesiredCount?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=loadBalancers", elemType: shared.LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @Metadata({ data: "json, name=scale" })
  scale?: Scale;

  @Metadata({ data: "json, name=serviceArn" })
  serviceArn?: string;

  @Metadata({ data: "json, name=serviceRegistries", elemType: shared.ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @Metadata({ data: "json, name=stabilityStatus" })
  stabilityStatus?: StabilityStatusEnum;

  @Metadata({ data: "json, name=stabilityStatusAt" })
  stabilityStatusAt?: Date;

  @Metadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;

  @Metadata({ data: "json, name=taskSetArn" })
  taskSetArn?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
