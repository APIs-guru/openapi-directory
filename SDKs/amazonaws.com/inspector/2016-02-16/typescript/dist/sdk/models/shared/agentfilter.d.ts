import { SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { AgentHealthEnum } from "./agenthealthenum";
/**
 * Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
**/
export declare class AgentFilter extends SpeakeasyBase {
    agentHealthCodes: AgentHealthCodeEnum[];
    agentHealths: AgentHealthEnum[];
}
