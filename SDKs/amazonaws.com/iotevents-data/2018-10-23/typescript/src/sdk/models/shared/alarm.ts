import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmState } from "./alarmstate";



// Alarm
/** 
 * Contains information about an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmState" })
  alarmState?: AlarmState;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;
}
