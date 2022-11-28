import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";



// JobExecutionSummary
/** 
 * The job execution summary.
**/
export class JobExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=queuedAt" })
  queuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;
}
