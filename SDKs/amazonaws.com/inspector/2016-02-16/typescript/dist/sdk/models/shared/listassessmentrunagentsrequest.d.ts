import { SpeakeasyBase } from "../../../internal/utils";
import { AgentFilter } from "./agentfilter";
export declare class ListAssessmentRunAgentsRequest extends SpeakeasyBase {
    assessmentRunArn: string;
    filter?: AgentFilter;
    maxResults?: number;
    nextToken?: string;
}
