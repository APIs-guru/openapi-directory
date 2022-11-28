import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=computedDesiredCount" })
  computedDesiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=loadBalancers", elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: Scale;

  @SpeakeasyMetadata({ data: "json, name=serviceArn" })
  serviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRegistries", elemType: ServiceRegistry })
  serviceRegistries?: ServiceRegistry[];

  @SpeakeasyMetadata({ data: "json, name=stabilityStatus" })
  stabilityStatus?: StabilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stabilityStatusAt" })
  stabilityStatusAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=taskSetArn" })
  taskSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
