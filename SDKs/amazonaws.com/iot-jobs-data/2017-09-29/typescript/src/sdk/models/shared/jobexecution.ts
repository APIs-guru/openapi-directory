import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";



// JobExecution
/** 
 * Contains data about a job execution.
**/
export class JobExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateSecondsBeforeTimedOut" })
  approximateSecondsBeforeTimedOut?: number;

  @SpeakeasyMetadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=jobDocument" })
  jobDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=queuedAt" })
  queuedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
