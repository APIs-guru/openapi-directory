import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information needed to acknowledge the alarm.
**/
export declare class AcknowledgeAlarmActionRequest extends SpeakeasyBase {
    alarmModelName: string;
    keyValue?: string;
    note?: string;
    requestId: string;
}
