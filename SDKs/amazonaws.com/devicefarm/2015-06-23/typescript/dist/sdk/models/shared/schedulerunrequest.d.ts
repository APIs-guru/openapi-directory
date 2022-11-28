import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleRunConfiguration } from "./schedulerunconfiguration";
import { DeviceSelectionConfiguration } from "./deviceselectionconfiguration";
import { ExecutionConfiguration } from "./executionconfiguration";
import { ScheduleRunTest } from "./scheduleruntest";
/**
 * Represents a request to the schedule run operation.
**/
export declare class ScheduleRunRequest extends SpeakeasyBase {
    appArn?: string;
    configuration?: ScheduleRunConfiguration;
    devicePoolArn?: string;
    deviceSelectionConfiguration?: DeviceSelectionConfiguration;
    executionConfiguration?: ExecutionConfiguration;
    name?: string;
    projectArn: string;
    test: ScheduleRunTest;
}
