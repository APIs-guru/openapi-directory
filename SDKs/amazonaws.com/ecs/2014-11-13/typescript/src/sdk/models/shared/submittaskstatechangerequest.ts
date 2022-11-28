import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStateChange } from "./attachmentstatechange";
import { ContainerStateChange } from "./containerstatechange";
import { ManagedAgentStateChange } from "./managedagentstatechange";



export class SubmitTaskStateChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentStateChange })
  attachments?: AttachmentStateChange[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: ContainerStateChange })
  containers?: ContainerStateChange[];

  @SpeakeasyMetadata({ data: "json, name=executionStoppedAt" })
  executionStoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=managedAgents", elemType: ManagedAgentStateChange })
  managedAgents?: ManagedAgentStateChange[];

  @SpeakeasyMetadata({ data: "json, name=pullStartedAt" })
  pullStartedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pullStoppedAt" })
  pullStoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;
}
