import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetails } from "./errordetails";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";


// ActionExecution
/** 
 * Represents information about the run of an action.
**/
export class ActionExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @Metadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorDetails;

  @Metadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @Metadata({ data: "json, name=externalExecutionUrl" })
  externalExecutionUrl?: string;

  @Metadata({ data: "json, name=lastStatusChange" })
  lastStatusChange?: Date;

  @Metadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @Metadata({ data: "json, name=status" })
  status?: ActionExecutionStatusEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
