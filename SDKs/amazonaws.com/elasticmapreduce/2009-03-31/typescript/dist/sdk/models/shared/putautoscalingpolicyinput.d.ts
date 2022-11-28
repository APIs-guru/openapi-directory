import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicy } from "./autoscalingpolicy";
export declare class PutAutoScalingPolicyInput extends SpeakeasyBase {
    autoScalingPolicy: AutoScalingPolicy;
    clusterId: string;
    instanceGroupId: string;
}
