import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnoozeAlarmActionRequest
/** 
 * Information needed to snooze the alarm.
**/
export class SnoozeAlarmActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=snoozeDuration" })
  snoozeDuration: number;
}
