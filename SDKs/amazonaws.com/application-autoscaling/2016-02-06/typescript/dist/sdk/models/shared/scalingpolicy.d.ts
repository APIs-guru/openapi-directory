import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { StepScalingPolicyConfiguration } from "./stepscalingpolicyconfiguration";
import { TargetTrackingScalingPolicyConfiguration } from "./targettrackingscalingpolicyconfiguration";
/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
export declare class ScalingPolicy extends SpeakeasyBase {
    alarms?: Alarm[];
    creationTime: Date;
    policyArn: string;
    policyName: string;
    policyType: PolicyTypeEnum;
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
