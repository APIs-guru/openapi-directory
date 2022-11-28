import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhaseStatusEnum } from "./phasestatusenum";



// TaskExecutionResultDetail
/** 
 * Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
**/
export class TaskExecutionResultDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=PrepareDuration" })
  prepareDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=PrepareStatus" })
  prepareStatus?: PhaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalDuration" })
  totalDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=TransferDuration" })
  transferDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=TransferStatus" })
  transferStatus?: PhaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VerifyDuration" })
  verifyDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=VerifyStatus" })
  verifyStatus?: PhaseStatusEnum;
}
