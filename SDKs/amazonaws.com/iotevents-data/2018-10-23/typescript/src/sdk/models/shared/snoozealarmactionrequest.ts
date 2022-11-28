import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnoozeAlarmActionRequest
/** 
 * Information needed to snooze the alarm.
**/
export class SnoozeAlarmActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=snoozeDuration" })
  snoozeDuration: number;
}
