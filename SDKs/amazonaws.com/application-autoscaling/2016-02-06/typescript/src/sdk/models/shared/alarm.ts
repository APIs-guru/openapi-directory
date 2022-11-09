import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alarm
/** 
 * Represents a CloudWatch alarm associated with a scaling policy.
**/
export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlarmARN" })
  alarmArn: string;

  @Metadata({ data: "json, name=AlarmName" })
  alarmName: string;
}
