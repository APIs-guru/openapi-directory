import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarm
/** 
 * Represents a CloudWatch alarm associated with a scaling policy.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlarmARN" })
  alarmArn: string;

  @SpeakeasyMetadata({ data: "json, name=AlarmName" })
  alarmName: string;
}
