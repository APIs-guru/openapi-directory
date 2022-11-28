import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentUpdateStatusEnum } from "./agentupdatestatusenum";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { Resource } from "./resource";
import { Tag } from "./tag";
import { VersionInfo } from "./versioninfo";



// ContainerInstance
/** 
 * An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
**/
export class ContainerInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentConnected" })
  agentConnected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=agentUpdateStatus" })
  agentUpdateStatus?: AgentUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=capacityProviderName" })
  capacityProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2InstanceId" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingTasksCount" })
  pendingTasksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=registeredAt" })
  registeredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=registeredResources", elemType: Resource })
  registeredResources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=remainingResources", elemType: Resource })
  remainingResources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=runningTasksCount" })
  runningTasksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: VersionInfo;
}
