import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedAgentNameEnum } from "./managedagentnameenum";


// ManagedAgentStateChange
/** 
 * An object representing a change in state for a managed agent.
**/
export class ManagedAgentStateChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName: string;

  @Metadata({ data: "json, name=managedAgentName" })
  managedAgentName: ManagedAgentNameEnum;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
