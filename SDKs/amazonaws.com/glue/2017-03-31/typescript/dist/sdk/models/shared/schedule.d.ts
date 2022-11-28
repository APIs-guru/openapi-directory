import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStateEnum } from "./schedulestateenum";
/**
 * A scheduling object using a <code>cron</code> statement to schedule an event.
**/
export declare class Schedule extends SpeakeasyBase {
    scheduleExpression?: string;
    state?: ScheduleStateEnum;
}
