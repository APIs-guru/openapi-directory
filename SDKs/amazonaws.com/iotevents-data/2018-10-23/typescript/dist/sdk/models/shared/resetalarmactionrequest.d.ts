import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information needed to reset the alarm.
**/
export declare class ResetAlarmActionRequest extends SpeakeasyBase {
    alarmModelName: string;
    keyValue?: string;
    note?: string;
    requestId: string;
}
