import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentHealthEnum } from "./agenthealthenum";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { TelemetryMetadata } from "./telemetrymetadata";


// AssessmentRunAgent
/** 
 * Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
**/
export class AssessmentRunAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentHealth" })
  agentHealth: AgentHealthEnum;

  @Metadata({ data: "json, name=agentHealthCode" })
  agentHealthCode: AgentHealthCodeEnum;

  @Metadata({ data: "json, name=agentHealthDetails" })
  agentHealthDetails?: string;

  @Metadata({ data: "json, name=agentId" })
  agentId: string;

  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @Metadata({ data: "json, name=autoScalingGroup" })
  autoScalingGroup?: string;

  @Metadata({ data: "json, name=telemetryMetadata", elemType: shared.TelemetryMetadata })
  telemetryMetadata: TelemetryMetadata[];
}
