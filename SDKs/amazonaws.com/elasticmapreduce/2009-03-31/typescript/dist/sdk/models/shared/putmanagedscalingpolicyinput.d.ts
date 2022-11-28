import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedScalingPolicy } from "./managedscalingpolicy";
export declare class PutManagedScalingPolicyInput extends SpeakeasyBase {
    clusterId: string;
    managedScalingPolicy: ManagedScalingPolicy;
}
