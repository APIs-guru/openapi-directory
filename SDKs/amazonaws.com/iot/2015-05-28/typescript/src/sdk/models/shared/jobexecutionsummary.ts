import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";


// JobExecutionSummary
/** 
 * The job execution summary.
**/
export class JobExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=queuedAt" })
  queuedAt?: Date;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;
}
