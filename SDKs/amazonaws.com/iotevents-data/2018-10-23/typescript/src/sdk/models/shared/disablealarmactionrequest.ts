import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableAlarmActionRequest
/** 
 * Information used to disable the alarm.
**/
export class DisableAlarmActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;
}
