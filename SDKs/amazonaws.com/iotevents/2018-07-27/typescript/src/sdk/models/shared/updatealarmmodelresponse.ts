import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";



export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;
}
