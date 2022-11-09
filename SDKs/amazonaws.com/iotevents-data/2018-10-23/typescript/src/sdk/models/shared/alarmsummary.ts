import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmStateNameEnum } from "./alarmstatenameenum";


// AlarmSummary
/** 
 * Contains a summary of an alarm.
**/
export class AlarmSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @Metadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=stateName" })
  stateName?: AlarmStateNameEnum;
}
