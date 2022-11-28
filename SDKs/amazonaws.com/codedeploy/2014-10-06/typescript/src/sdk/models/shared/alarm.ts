import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarm
/** 
 * Information about an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
