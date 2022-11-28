import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentStatusEnum } from "./agentstatusenum";



// AgentListEntry
/** 
 * Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation is called.
**/
export class AgentListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AgentStatusEnum;
}
