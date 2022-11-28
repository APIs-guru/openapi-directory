import { SpeakeasyBase } from "../../../internal/utils";
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateJobRequest extends SpeakeasyBase {
    allocatedCapacity?: number;
    command: JobCommand;
    connections?: ConnectionsList;
    defaultArguments?: Map<string, string>;
    description?: string;
    executionProperty?: ExecutionProperty;
    glueVersion?: string;
    logUri?: string;
    maxCapacity?: number;
    maxRetries?: number;
    name: string;
    nonOverridableArguments?: Map<string, string>;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    role: string;
    securityConfiguration?: string;
    tags?: Map<string, string>;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
