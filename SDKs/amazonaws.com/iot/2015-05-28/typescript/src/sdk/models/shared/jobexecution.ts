import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
import { JobExecutionStatusDetails } from "./jobexecutionstatusdetails";


// JobExecution
/** 
 * The job execution object represents the execution of a job on a particular device.
**/
export class JobExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=approximateSecondsBeforeTimedOut" })
  approximateSecondsBeforeTimedOut?: number;

  @Metadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "json, name=forceCanceled" })
  forceCanceled?: boolean;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=queuedAt" })
  queuedAt?: Date;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: JobExecutionStatusDetails;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
