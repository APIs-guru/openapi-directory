import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";



// JobUpdate
/** 
 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
**/
export class JobUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: JobCommand;

  @SpeakeasyMetadata({ data: "json, name=Connections" })
  connections?: ConnectionsList;

  @SpeakeasyMetadata({ data: "json, name=DefaultArguments" })
  defaultArguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionProperty" })
  executionProperty?: ExecutionProperty;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=NonOverridableArguments" })
  nonOverridableArguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
