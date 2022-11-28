import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStateChange } from "./attachmentstatechange";
import { ContainerStateChange } from "./containerstatechange";
import { ManagedAgentStateChange } from "./managedagentstatechange";
export declare class SubmitTaskStateChangeRequest extends SpeakeasyBase {
    attachments?: AttachmentStateChange[];
    cluster?: string;
    containers?: ContainerStateChange[];
    executionStoppedAt?: Date;
    managedAgents?: ManagedAgentStateChange[];
    pullStartedAt?: Date;
    pullStoppedAt?: Date;
    reason?: string;
    status?: string;
    task?: string;
}
