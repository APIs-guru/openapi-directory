import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
export declare class PutScalingPolicyResponse extends SpeakeasyBase {
    alarms?: Alarm[];
    policyArn: string;
}
