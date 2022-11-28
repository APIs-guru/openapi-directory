import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlarmModelSummary
/** 
 * Contains a summary of an alarm model.
**/
export class AlarmModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;
}
