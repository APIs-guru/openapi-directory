import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarm
/** 
 * Describes an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alarmArn?: string;

  @SpeakeasyMetadata()
  alarmName?: string;
}
