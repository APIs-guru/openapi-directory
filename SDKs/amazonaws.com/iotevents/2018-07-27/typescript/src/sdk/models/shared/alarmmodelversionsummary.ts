import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";


// AlarmModelVersionSummary
/** 
 * Contains a summary of an alarm model version.
**/
export class AlarmModelVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @Metadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
