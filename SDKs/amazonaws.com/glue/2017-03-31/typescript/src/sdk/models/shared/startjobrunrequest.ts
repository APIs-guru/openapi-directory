import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";



export class StartJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunId" })
  jobRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
