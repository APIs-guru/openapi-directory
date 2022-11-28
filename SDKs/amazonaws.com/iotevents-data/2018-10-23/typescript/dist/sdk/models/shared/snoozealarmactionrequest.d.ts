import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information needed to snooze the alarm.
**/
export declare class SnoozeAlarmActionRequest extends SpeakeasyBase {
    alarmModelName: string;
    keyValue?: string;
    note?: string;
    requestId: string;
    snoozeDuration: number;
}
