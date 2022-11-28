import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=actionsDefinition", elemType: MitigationAction })
  actionsDefinition?: MitigationAction[];

  @SpeakeasyMetadata({ data: "json, name=onlyActiveViolationsIncluded" })
  onlyActiveViolationsIncluded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suppressedAlertsIncluded" })
  suppressedAlertsIncluded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: DetectMitigationActionsTaskTarget;

  @SpeakeasyMetadata({ data: "json, name=taskEndTime" })
  taskEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartTime" })
  taskStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=taskStatistics" })
  taskStatistics?: DetectMitigationActionsTaskStatistics;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: DetectMitigationActionsTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=violationEventOccurrenceRange" })
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
}
