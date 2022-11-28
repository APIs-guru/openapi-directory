import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
export declare class CreateAlarmModelResponse extends SpeakeasyBase {
    alarmModelArn?: string;
    alarmModelVersion?: string;
    creationTime?: Date;
    lastUpdateTime?: Date;
    status?: AlarmModelVersionStatusEnum;
}
