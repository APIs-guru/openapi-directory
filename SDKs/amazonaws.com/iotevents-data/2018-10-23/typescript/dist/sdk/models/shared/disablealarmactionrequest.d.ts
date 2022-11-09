import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information used to disable the alarm.
**/
export declare class DisableAlarmActionRequest extends SpeakeasyBase {
    alarmModelName: string;
    keyValue?: string;
    note?: string;
    requestId: string;
}
