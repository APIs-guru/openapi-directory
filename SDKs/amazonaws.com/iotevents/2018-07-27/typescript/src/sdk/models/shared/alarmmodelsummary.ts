import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlarmModelSummary
/** 
 * Contains a summary of an alarm model.
**/
export class AlarmModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;
}
