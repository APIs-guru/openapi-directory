import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConnectionScheduleTimeUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks",
    Months = "months"
}
/**
 * if null, then no schedule is set.
**/
export declare class ConnectionSchedule extends SpeakeasyBase {
    timeUnit: ConnectionScheduleTimeUnitEnum;
    units: number;
}
