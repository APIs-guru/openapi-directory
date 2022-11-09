import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentListEntry } from "./agentlistentry";


// ListAgentsResponse
/** 
 * ListAgentsResponse
**/
export class ListAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Agents", elemType: shared.AgentListEntry })
  agents?: AgentListEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
