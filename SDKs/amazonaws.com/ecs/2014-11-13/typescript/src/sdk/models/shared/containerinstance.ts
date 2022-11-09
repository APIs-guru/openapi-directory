import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentUpdateStatusEnum } from "./agentupdatestatusenum";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { Resource } from "./resource";
import { Resource } from "./resource";
import { Tag } from "./tag";
import { VersionInfo } from "./versioninfo";


// ContainerInstance
/** 
 * An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
**/
export class ContainerInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentConnected" })
  agentConnected?: boolean;

  @Metadata({ data: "json, name=agentUpdateStatus" })
  agentUpdateStatus?: AgentUpdateStatusEnum;

  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=capacityProviderName" })
  capacityProviderName?: string;

  @Metadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @Metadata({ data: "json, name=ec2InstanceId" })
  ec2InstanceId?: string;

  @Metadata({ data: "json, name=pendingTasksCount" })
  pendingTasksCount?: number;

  @Metadata({ data: "json, name=registeredAt" })
  registeredAt?: Date;

  @Metadata({ data: "json, name=registeredResources", elemType: shared.Resource })
  registeredResources?: Resource[];

  @Metadata({ data: "json, name=remainingResources", elemType: shared.Resource })
  remainingResources?: Resource[];

  @Metadata({ data: "json, name=runningTasksCount" })
  runningTasksCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: VersionInfo;
}
