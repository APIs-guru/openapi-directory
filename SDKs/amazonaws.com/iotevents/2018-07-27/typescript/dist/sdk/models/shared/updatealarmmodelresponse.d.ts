import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
export declare class UpdateAlarmModelResponse extends SpeakeasyBase {
    alarmModelArn?: string;
    alarmModelVersion?: string;
    creationTime?: Date;
    lastUpdateTime?: Date;
    status?: AlarmModelVersionStatusEnum;
}
