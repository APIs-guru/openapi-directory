import { SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";
export declare class ListDetectMitigationActionsTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: DetectMitigationActionsTaskSummary[];
}
