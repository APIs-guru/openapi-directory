import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { AgentHealthEnum } from "./agenthealthenum";


// AgentFilter
/** 
 * Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
**/
export class AgentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentHealthCodes" })
  agentHealthCodes: AgentHealthCodeEnum[];

  @Metadata({ data: "json, name=agentHealths" })
  agentHealths: AgentHealthEnum[];
}
