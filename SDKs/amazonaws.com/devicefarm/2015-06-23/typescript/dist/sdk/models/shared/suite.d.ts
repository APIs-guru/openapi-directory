import { SpeakeasyBase } from "../../../internal/utils";
import { Counters } from "./counters";
import { DeviceMinutes } from "./deviceminutes";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Represents a collection of one or more tests.
**/
export declare class Suite extends SpeakeasyBase {
    arn?: string;
    counters?: Counters;
    created?: Date;
    deviceMinutes?: DeviceMinutes;
    message?: string;
    name?: string;
    result?: ExecutionResultEnum;
    started?: Date;
    status?: ExecutionStatusEnum;
    stopped?: Date;
    type?: TestTypeEnum;
}
