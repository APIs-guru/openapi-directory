import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableAlarmActionRequest
/** 
 * Information used to disable the alarm.
**/
export class DisableAlarmActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;
}
