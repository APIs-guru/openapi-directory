import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class StartJobRunRequest extends SpeakeasyBase {
    allocatedCapacity?: number;
    arguments?: Map<string, string>;
    jobName: string;
    jobRunId?: string;
    maxCapacity?: number;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    securityConfiguration?: string;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
