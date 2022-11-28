import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateNameEnum } from "./alarmstatenameenum";



// AlarmSummary
/** 
 * Contains a summary of an alarm.
**/
export class AlarmSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName?: AlarmStateNameEnum;
}
