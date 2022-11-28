import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { StepScalingPolicyConfiguration } from "./stepscalingpolicyconfiguration";
import { TargetTrackingScalingPolicyConfiguration } from "./targettrackingscalingpolicyconfiguration";



// ScalingPolicy
/** 
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
export class ScalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alarms", elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=PolicyARN" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=StepScalingPolicyConfiguration" })
  stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
