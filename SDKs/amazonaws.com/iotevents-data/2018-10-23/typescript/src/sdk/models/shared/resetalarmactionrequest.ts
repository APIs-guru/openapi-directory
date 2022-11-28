import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetAlarmActionRequest
/** 
 * Information needed to reset the alarm.
**/
export class ResetAlarmActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;
}
