import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentListEntry } from "./agentlistentry";



// ListAgentsResponse
/** 
 * ListAgentsResponse
**/
export class ListAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agents", elemType: AgentListEntry })
  agents?: AgentListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
