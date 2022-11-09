import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
/**
 * Contains a summary of an alarm model version.
**/
export declare class AlarmModelVersionSummary extends SpeakeasyBase {
    alarmModelArn?: string;
    alarmModelName?: string;
    alarmModelVersion?: string;
    creationTime?: Date;
    lastUpdateTime?: Date;
    roleArn?: string;
    status?: AlarmModelVersionStatusEnum;
    statusMessage?: string;
}
