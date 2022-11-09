import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudwatchAlarmAction
/** 
 * Describes an action that updates a CloudWatch alarm.
**/
export class CloudwatchAlarmAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmName" })
  alarmName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=stateReason" })
  stateReason: string;

  @Metadata({ data: "json, name=stateValue" })
  stateValue: string;
}
