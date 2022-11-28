import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeAlarmActionRequest
/** 
 * Information needed to acknowledge the alarm.
**/
export class AcknowledgeAlarmActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;
}
