import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";



// ActionExecution
/** 
 * Represents information about the run of an action.
**/
export class ActionExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionExecutionId" })
  actionExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=errorDetails" })
  errorDetails?: ErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=externalExecutionUrl" })
  externalExecutionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatusChange" })
  lastStatusChange?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ActionExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
