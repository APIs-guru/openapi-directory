import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { AgentHealthEnum } from "./agenthealthenum";



// AgentFilter
/** 
 * Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
**/
export class AgentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentHealthCodes" })
  agentHealthCodes: AgentHealthCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=agentHealths" })
  agentHealths: AgentHealthEnum[];
}
