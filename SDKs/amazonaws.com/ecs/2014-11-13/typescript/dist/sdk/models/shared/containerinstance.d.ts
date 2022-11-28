import { SpeakeasyBase } from "../../../internal/utils";
import { AgentUpdateStatusEnum } from "./agentupdatestatusenum";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { Resource } from "./resource";
import { Tag } from "./tag";
import { VersionInfo } from "./versioninfo";
/**
 * An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
**/
export declare class ContainerInstance extends SpeakeasyBase {
    agentConnected?: boolean;
    agentUpdateStatus?: AgentUpdateStatusEnum;
    attachments?: Attachment[];
    attributes?: Attribute[];
    capacityProviderName?: string;
    containerInstanceArn?: string;
    ec2InstanceId?: string;
    pendingTasksCount?: number;
    registeredAt?: Date;
    registeredResources?: Resource[];
    remainingResources?: Resource[];
    runningTasksCount?: number;
    status?: string;
    statusReason?: string;
    tags?: Tag[];
    version?: number;
    versionInfo?: VersionInfo;
}
