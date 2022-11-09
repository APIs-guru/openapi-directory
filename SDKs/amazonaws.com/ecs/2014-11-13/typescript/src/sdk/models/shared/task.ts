import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=capacityProviderName" })
  capacityProviderName?: string;

  @Metadata({ data: "json, name=clusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=connectivity" })
  connectivity?: ConnectivityEnum;

  @Metadata({ data: "json, name=connectivityAt" })
  connectivityAt?: Date;

  @Metadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=desiredStatus" })
  desiredStatus?: string;

  @Metadata({ data: "json, name=enableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @Metadata({ data: "json, name=executionStoppedAt" })
  executionStoppedAt?: Date;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=healthStatus" })
  healthStatus?: HealthStatusEnum;

  @Metadata({ data: "json, name=inferenceAccelerators", elemType: shared.InferenceAccelerator })
  inferenceAccelerators?: InferenceAccelerator[];

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @Metadata({ data: "json, name=launchType" })
  launchType?: LaunchTypeEnum;

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=overrides" })
  overrides?: TaskOverride;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=pullStartedAt" })
  pullStartedAt?: Date;

  @Metadata({ data: "json, name=pullStoppedAt" })
  pullStoppedAt?: Date;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=startedBy" })
  startedBy?: string;

  @Metadata({ data: "json, name=stopCode" })
  stopCode?: TaskStopCodeEnum;

  @Metadata({ data: "json, name=stoppedAt" })
  stoppedAt?: Date;

  @Metadata({ data: "json, name=stoppedReason" })
  stoppedReason?: string;

  @Metadata({ data: "json, name=stoppingAt" })
  stoppingAt?: Date;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=taskDefinitionArn" })
  taskDefinitionArn?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
