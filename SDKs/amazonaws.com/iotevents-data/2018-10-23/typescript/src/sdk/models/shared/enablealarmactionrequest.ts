import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableAlarmActionRequest
/** 
 * Information needed to enable the alarm.
**/
export class EnableAlarmActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;
}
