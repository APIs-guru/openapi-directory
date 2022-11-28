import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information needed to enable the alarm.
**/
export declare class EnableAlarmActionRequest extends SpeakeasyBase {
    alarmModelName: string;
    keyValue?: string;
    note?: string;
    requestId: string;
}
