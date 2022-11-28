import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";



// AlarmModelVersionSummary
/** 
 * Contains a summary of an alarm model version.
**/
export class AlarmModelVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
