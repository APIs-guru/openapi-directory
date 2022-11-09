import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmState } from "./alarmstate";


// Alarm
/** 
 * Contains information about an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @Metadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @Metadata({ data: "json, name=alarmState" })
  alarmState?: AlarmState;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=severity" })
  severity?: number;
}
