import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmState } from "./alarmstate";
/**
 * Contains information about an alarm.
**/
export declare class Alarm extends SpeakeasyBase {
    alarmModelName?: string;
    alarmModelVersion?: string;
    alarmState?: AlarmState;
    creationTime?: Date;
    keyValue?: string;
    lastUpdateTime?: Date;
    severity?: number;
}
