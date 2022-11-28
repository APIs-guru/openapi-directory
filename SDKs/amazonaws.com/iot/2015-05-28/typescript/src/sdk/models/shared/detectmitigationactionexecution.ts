import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionExecutionStatusEnum } from "./detectmitigationactionexecutionstatusenum";



// DetectMitigationActionExecution
/** 
 *  Describes which mitigation actions should be executed. 
**/
export class DetectMitigationActionExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=executionEndDate" })
  executionEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionStartDate" })
  executionStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DetectMitigationActionExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=violationId" })
  violationId?: string;
}
