import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";


export class StartJobRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=JobRunId" })
  jobRunId?: string;

  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
