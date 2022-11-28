import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationAction } from "./mitigationaction";
import { DetectMitigationActionsTaskTarget } from "./detectmitigationactionstasktarget";
import { DetectMitigationActionsTaskStatistics } from "./detectmitigationactionstaskstatistics";
import { DetectMitigationActionsTaskStatusEnum } from "./detectmitigationactionstaskstatusenum";
import { ViolationEventOccurrenceRange } from "./violationeventoccurrencerange";
/**
 *  The summary of the mitigation action tasks.
**/
export declare class DetectMitigationActionsTaskSummary extends SpeakeasyBase {
    actionsDefinition?: MitigationAction[];
    onlyActiveViolationsIncluded?: boolean;
    suppressedAlertsIncluded?: boolean;
    target?: DetectMitigationActionsTaskTarget;
    taskEndTime?: Date;
    taskId?: string;
    taskStartTime?: Date;
    taskStatistics?: DetectMitigationActionsTaskStatistics;
    taskStatus?: DetectMitigationActionsTaskStatusEnum;
    violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
}
