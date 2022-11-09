import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentStatusEnum } from "./agentstatusenum";


// AgentListEntry
/** 
 * Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation is called.
**/
export class AgentListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AgentStatusEnum;
}
