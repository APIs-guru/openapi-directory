import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
/**
 * Represents a scaling policy.
**/
export declare class ScalingPolicy extends SpeakeasyBase {
    policyName: string;
    policyType: PolicyTypeEnum;
    targetTrackingConfiguration?: TargetTrackingConfiguration;
}
