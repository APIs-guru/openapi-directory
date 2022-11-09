import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeAlarmActionRequest
/** 
 * Information needed to acknowledge the alarm.
**/
export class AcknowledgeAlarmActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;
}
