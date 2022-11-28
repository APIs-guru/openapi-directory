import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobExecutionSummary
/** 
 * Contains a subset of information about a job execution.
**/
export class JobExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=queuedAt" })
  queuedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
