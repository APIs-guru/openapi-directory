import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PhaseStatusEnum } from "./phasestatusenum";
import { PhaseStatusEnum } from "./phasestatusenum";
import { PhaseStatusEnum } from "./phasestatusenum";


// TaskExecutionResultDetail
/** 
 * Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
**/
export class TaskExecutionResultDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: string;

  @Metadata({ data: "json, name=PrepareDuration" })
  prepareDuration?: number;

  @Metadata({ data: "json, name=PrepareStatus" })
  prepareStatus?: PhaseStatusEnum;

  @Metadata({ data: "json, name=TotalDuration" })
  totalDuration?: number;

  @Metadata({ data: "json, name=TransferDuration" })
  transferDuration?: number;

  @Metadata({ data: "json, name=TransferStatus" })
  transferStatus?: PhaseStatusEnum;

  @Metadata({ data: "json, name=VerifyDuration" })
  verifyDuration?: number;

  @Metadata({ data: "json, name=VerifyStatus" })
  verifyStatus?: PhaseStatusEnum;
}
