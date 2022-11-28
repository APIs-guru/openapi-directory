import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { ConnectivityEnum } from "./connectivityenum";
import { Container } from "./container";
import { EphemeralStorage } from "./ephemeralstorage";
import { HealthStatusEnum } from "./healthstatusenum";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { LaunchTypeEnum } from "./launchtypeenum";
import { TaskOverride } from "./taskoverride";
import { TaskStopCodeEnum } from "./taskstopcodeenum";
import { Tag } from "./tag";



// Task
/** 
 * Details on a task in a cluster.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=capacityProviderName" })
  capacityProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=connectivity" })
  connectivity?: ConnectivityEnum;

  @SpeakeasyMetadata({ data: "json, name=connectivityAt" })
  connectivityAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=desiredStatus" })
  desiredStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @SpeakeasyMetadata({ data: "json, name=executionStoppedAt" })
  executionStoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=healthStatus" })
  healthStatus?: HealthStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=inferenceAccelerators", elemType: InferenceAccelerator })
  inferenceAccelerators?: InferenceAccelerator[];

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=overrides" })
  overrides?: TaskOverride;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=pullStartedAt" })
  pullStartedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pullStoppedAt" })
  pullStoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=stopCode" })
  stopCode?: TaskStopCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=stoppedAt" })
  stoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=stoppedReason" })
  stoppedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=stoppingAt" })
  stoppingAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=taskDefinitionArn" })
  taskDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
