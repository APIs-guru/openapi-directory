import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthEnum } from "./agenthealthenum";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { TelemetryMetadata } from "./telemetrymetadata";



// AssessmentRunAgent
/** 
 * Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
**/
export class AssessmentRunAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentHealth" })
  agentHealth: AgentHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=agentHealthCode" })
  agentHealthCode: AgentHealthCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=agentHealthDetails" })
  agentHealthDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetryMetadata", elemType: TelemetryMetadata })
  telemetryMetadata: TelemetryMetadata[];
}
