import { SpeakeasyBase } from "../../../internal/utils";
import { AgentListEntry } from "./agentlistentry";
/**
 * ListAgentsResponse
**/
export declare class ListAgentsResponse extends SpeakeasyBase {
    agents?: AgentListEntry[];
    nextToken?: string;
}
