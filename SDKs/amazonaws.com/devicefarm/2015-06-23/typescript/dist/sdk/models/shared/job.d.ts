import { SpeakeasyBase } from "../../../internal/utils";
import { Counters } from "./counters";
import { Device } from "./device";
import { DeviceMinutes } from "./deviceminutes";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Represents a device.
**/
export declare class Job extends SpeakeasyBase {
    arn?: string;
    counters?: Counters;
    created?: Date;
    device?: Device;
    deviceMinutes?: DeviceMinutes;
    instanceArn?: string;
    message?: string;
    name?: string;
    result?: ExecutionResultEnum;
    started?: Date;
    status?: ExecutionStatusEnum;
    stopped?: Date;
    type?: TestTypeEnum;
    videoCapture?: boolean;
    videoEndpoint?: string;
}
