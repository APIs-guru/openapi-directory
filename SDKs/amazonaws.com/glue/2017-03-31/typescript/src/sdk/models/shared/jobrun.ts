import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobRunStateEnum } from "./jobrunstateenum";
import { NotificationProperty } from "./notificationproperty";
import { Predecessor } from "./predecessor";
import { WorkerTypeEnum } from "./workertypeenum";


// JobRun
/** 
 * Contains information about a job run.
**/
export class JobRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=Attempt" })
  attempt?: number;

  @Metadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ExecutionTime" })
  executionTime?: number;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobRunState" })
  jobRunState?: JobRunStateEnum;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=PredecessorRuns", elemType: shared.Predecessor })
  predecessorRuns?: Predecessor[];

  @Metadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TriggerName" })
  triggerName?: string;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
