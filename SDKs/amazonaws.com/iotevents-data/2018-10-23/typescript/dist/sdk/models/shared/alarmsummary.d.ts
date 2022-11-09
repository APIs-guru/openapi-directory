import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmStateNameEnum } from "./alarmstatenameenum";
/**
 * Contains a summary of an alarm.
**/
export declare class AlarmSummary extends SpeakeasyBase {
    alarmModelName?: string;
    alarmModelVersion?: string;
    creationTime?: Date;
    keyValue?: string;
    lastUpdateTime?: Date;
    stateName?: AlarmStateNameEnum;
}
