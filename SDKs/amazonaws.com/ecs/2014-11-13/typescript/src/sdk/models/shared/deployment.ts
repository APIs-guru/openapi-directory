import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { DeploymentRolloutStateEnum } from "./deploymentrolloutstateenum";


// Deployment
/** 
 * The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityProviderStrategy", elemType: shared.CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @Metadata({ data: "json, name=failedTasks" })
  failedTasks?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=rolloutState" })
  rolloutState?: DeploymentRolloutStateEnum;

  @Metadata({ data: "json, name=rolloutStateReason" })
  rolloutStateReason?: string;

  @Metadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
