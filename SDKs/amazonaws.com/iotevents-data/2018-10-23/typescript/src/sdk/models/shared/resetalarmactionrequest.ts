import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetAlarmActionRequest
/** 
 * Information needed to reset the alarm.
**/
export class ResetAlarmActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;
}
