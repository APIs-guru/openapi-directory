import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRunStateEnum } from "./jobrunstateenum";
import { NotificationProperty } from "./notificationproperty";
import { Predecessor } from "./predecessor";
import { WorkerTypeEnum } from "./workertypeenum";



// JobRun
/** 
 * Contains information about a job run.
**/
export class JobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Attempt" })
  attempt?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionTime" })
  executionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunState" })
  jobRunState?: JobRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=PredecessorRuns", elemType: Predecessor })
  predecessorRuns?: Predecessor[];

  @SpeakeasyMetadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TriggerName" })
  triggerName?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
