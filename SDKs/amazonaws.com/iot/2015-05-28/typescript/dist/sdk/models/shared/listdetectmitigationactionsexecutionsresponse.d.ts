import { SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionExecution } from "./detectmitigationactionexecution";
export declare class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
    actionsExecutions?: DetectMitigationActionExecution[];
    nextToken?: string;
}
