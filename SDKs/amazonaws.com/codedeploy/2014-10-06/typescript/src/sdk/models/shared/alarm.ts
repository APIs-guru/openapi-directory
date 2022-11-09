import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alarm
/** 
 * Information about an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
