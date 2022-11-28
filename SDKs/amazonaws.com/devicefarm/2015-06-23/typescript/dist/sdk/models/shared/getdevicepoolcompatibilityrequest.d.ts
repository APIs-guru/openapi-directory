import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";
import { TestTypeEnum } from "./testtypeenum";
/**
 * Represents a request to the get device pool compatibility operation.
**/
export declare class GetDevicePoolCompatibilityRequest extends SpeakeasyBase {
    appArn?: string;
    configuration?: ScheduleRunConfiguration;
    devicePoolArn: string;
    test?: ScheduleRunTest;
    testType?: TestTypeEnum;
}
