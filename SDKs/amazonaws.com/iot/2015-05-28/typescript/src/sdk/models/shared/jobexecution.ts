import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
import { JobExecutionStatusDetails } from "./jobexecutionstatusdetails";



// JobExecution
/** 
 * The job execution object represents the execution of a job on a particular device.
**/
export class JobExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateSecondsBeforeTimedOut" })
  approximateSecondsBeforeTimedOut?: number;

  @SpeakeasyMetadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=forceCanceled" })
  forceCanceled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=queuedAt" })
  queuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: JobExecutionStatusDetails;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
