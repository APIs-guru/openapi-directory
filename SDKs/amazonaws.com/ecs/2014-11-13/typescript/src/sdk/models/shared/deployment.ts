import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { DeploymentRolloutStateEnum } from "./deploymentrolloutstateenum";



// Deployment
/** 
 * The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityProviderStrategy", elemType: CapacityProviderStrategyItem })
  capacityProviderStrategy?: CapacityProviderStrategyItem[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=desiredCount" })
  desiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failedTasks" })
  failedTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutState" })
  rolloutState?: DeploymentRolloutStateEnum;

  @SpeakeasyMetadata({ data: "json, name=rolloutStateReason" })
  rolloutStateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=runningCount" })
  runningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=taskDefinition" })
  taskDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
