import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";


// JobExecution
/** 
 * Contains data about a job execution.
**/
export class JobExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=approximateSecondsBeforeTimedOut" })
  approximateSecondsBeforeTimedOut?: number;

  @Metadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "json, name=jobDocument" })
  jobDocument?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: number;

  @Metadata({ data: "json, name=queuedAt" })
  queuedAt?: number;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @Metadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
