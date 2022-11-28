import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * Contains the output of PutScalingPolicy.
**/
export declare class PolicyArnType extends SpeakeasyBase {
    alarms?: Alarm[];
    policyArn?: string;
}
