import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentStateChange } from "./attachmentstatechange";
import { ContainerStateChange } from "./containerstatechange";
import { ManagedAgentStateChange } from "./managedagentstatechange";


export class SubmitTaskStateChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.AttachmentStateChange })
  attachments?: AttachmentStateChange[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containers", elemType: shared.ContainerStateChange })
  containers?: ContainerStateChange[];

  @Metadata({ data: "json, name=executionStoppedAt" })
  executionStoppedAt?: Date;

  @Metadata({ data: "json, name=managedAgents", elemType: shared.ManagedAgentStateChange })
  managedAgents?: ManagedAgentStateChange[];

  @Metadata({ data: "json, name=pullStartedAt" })
  pullStartedAt?: Date;

  @Metadata({ data: "json, name=pullStoppedAt" })
  pullStoppedAt?: Date;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=task" })
  task?: string;
}
