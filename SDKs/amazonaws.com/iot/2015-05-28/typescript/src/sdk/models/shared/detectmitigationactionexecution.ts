import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectMitigationActionExecutionStatusEnum } from "./detectmitigationactionexecutionstatusenum";


// DetectMitigationActionExecution
/** 
 *  Describes which mitigation actions should be executed. 
**/
export class DetectMitigationActionExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=executionEndDate" })
  executionEndDate?: Date;

  @Metadata({ data: "json, name=executionStartDate" })
  executionStartDate?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: DetectMitigationActionExecutionStatusEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=violationId" })
  violationId?: string;
}
