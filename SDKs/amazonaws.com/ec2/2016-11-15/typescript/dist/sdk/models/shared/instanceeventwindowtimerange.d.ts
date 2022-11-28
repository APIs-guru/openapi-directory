import { SpeakeasyBase } from "../../../internal/utils";
import { WeekDayEnum } from "./weekdayenum";
/**
 * The start day and time and the end day and time of the time range, in UTC.
**/
export declare class InstanceEventWindowTimeRange extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: WeekDayEnum;
    startHour?: number;
    startWeekDay?: WeekDayEnum;
}
