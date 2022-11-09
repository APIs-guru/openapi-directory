import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnPremConfig
/** 
 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
**/
export class OnPremConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns: string[];
}
