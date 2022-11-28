import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnPremConfig
/** 
 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
**/
export class OnPremConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns: string[];
}
