import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudwatchAlarmAction
/** 
 * Describes an action that updates a CloudWatch alarm.
**/
export class CloudwatchAlarmAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmName" })
  alarmName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stateReason" })
  stateReason: string;

  @SpeakeasyMetadata({ data: "json, name=stateValue" })
  stateValue: string;
}
