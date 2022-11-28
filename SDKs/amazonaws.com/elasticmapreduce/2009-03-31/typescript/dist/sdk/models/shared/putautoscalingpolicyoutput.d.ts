import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
export declare class PutAutoScalingPolicyOutput extends SpeakeasyBase {
    autoScalingPolicy?: AutoScalingPolicyDescription;
    clusterArn?: string;
    clusterId?: string;
    instanceGroupId?: string;
}
