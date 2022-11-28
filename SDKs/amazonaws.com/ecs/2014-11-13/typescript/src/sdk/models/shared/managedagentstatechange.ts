import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";



// ManagedAgentStateChange
/** 
 * An object representing a change in state for a managed agent.
**/
export class ManagedAgentStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=managedAgentName" })
  managedAgentName: ManagedAgentNameEnum;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
