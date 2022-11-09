import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobExecutionSummary
/** 
 * Contains a subset of information about a job execution.
**/
export class JobExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: number;

  @Metadata({ data: "json, name=queuedAt" })
  queuedAt?: number;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
