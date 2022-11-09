import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MitigationAction } from "./mitigationaction";
import { DetectMitigationActionsTaskTarget } from "./detectmitigationactionstasktarget";
import { DetectMitigationActionsTaskStatistics } from "./detectmitigationactionstaskstatistics";
import { DetectMitigationActionsTaskStatusEnum } from "./detectmitigationactionstaskstatusenum";
import { ViolationEventOccurrenceRange } from "./violationeventoccurrencerange";


// DetectMitigationActionsTaskSummary
/** 
 *  The summary of the mitigation action tasks. 
**/
export class DetectMitigationActionsTaskSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionsDefinition", elemType: shared.MitigationAction })
  actionsDefinition?: MitigationAction[];

  @Metadata({ data: "json, name=onlyActiveViolationsIncluded" })
  onlyActiveViolationsIncluded?: boolean;

  @Metadata({ data: "json, name=suppressedAlertsIncluded" })
  suppressedAlertsIncluded?: boolean;

  @Metadata({ data: "json, name=target" })
  target?: DetectMitigationActionsTaskTarget;

  @Metadata({ data: "json, name=taskEndTime" })
  taskEndTime?: Date;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;

  @Metadata({ data: "json, name=taskStatistics" })
  taskStatistics?: DetectMitigationActionsTaskStatistics;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus?: DetectMitigationActionsTaskStatusEnum;

  @Metadata({ data: "json, name=violationEventOccurrenceRange" })
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
}
