import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { StepScalingPolicyConfiguration } from "./stepscalingpolicyconfiguration";
import { TargetTrackingScalingPolicyConfiguration } from "./targettrackingscalingpolicyconfiguration";
export declare class PutScalingPolicyRequest extends SpeakeasyBase {
    policyName: string;
    policyType?: PolicyTypeEnum;
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
