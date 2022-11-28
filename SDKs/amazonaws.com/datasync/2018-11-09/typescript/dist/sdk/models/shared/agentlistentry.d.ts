import { SpeakeasyBase } from "../../../internal/utils";
import { AgentStatusEnum } from "./agentstatusenum";
/**
 * Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation is called.
**/
export declare class AgentListEntry extends SpeakeasyBase {
    agentArn?: string;
    name?: string;
    status?: AgentStatusEnum;
}
