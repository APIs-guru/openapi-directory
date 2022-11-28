import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that updates a CloudWatch alarm.
**/
export declare class CloudwatchAlarmAction extends SpeakeasyBase {
    alarmName: string;
    roleArn: string;
    stateReason: string;
    stateValue: string;
}
