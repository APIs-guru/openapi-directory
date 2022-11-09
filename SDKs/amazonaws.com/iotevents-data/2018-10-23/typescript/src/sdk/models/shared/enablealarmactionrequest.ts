import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableAlarmActionRequest
/** 
 * Information needed to enable the alarm.
**/
export class EnableAlarmActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;
}
