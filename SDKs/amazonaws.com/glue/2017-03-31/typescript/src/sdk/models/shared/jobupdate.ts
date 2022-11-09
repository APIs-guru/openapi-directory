import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AllocatedCapacity" })
  allocatedCapacity?: number;

  @Metadata({ data: "json, name=Command" })
  command?: JobCommand;

  @Metadata({ data: "json, name=Connections" })
  connections?: ConnectionsList;

  @Metadata({ data: "json, name=DefaultArguments" })
  defaultArguments?: Map<string, string>;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExecutionProperty" })
  executionProperty?: ExecutionProperty;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=MaxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=NonOverridableArguments" })
  nonOverridableArguments?: Map<string, string>;

  @Metadata({ data: "json, name=NotificationProperty" })
  notificationProperty?: NotificationProperty;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
