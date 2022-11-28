import { SpeakeasyBase } from "../../../internal/utils";
import { AgentHealthEnum } from "./agenthealthenum";
import { AgentHealthCodeEnum } from "./agenthealthcodeenum";
import { TelemetryMetadata } from "./telemetrymetadata";
/**
 * Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
**/
export declare class AssessmentRunAgent extends SpeakeasyBase {
    agentHealth: AgentHealthEnum;
    agentHealthCode: AgentHealthCodeEnum;
    agentHealthDetails?: string;
    agentId: string;
    assessmentRunArn: string;
    autoScalingGroup?: string;
    telemetryMetadata: TelemetryMetadata[];
}
