import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";


export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @Metadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;
}
