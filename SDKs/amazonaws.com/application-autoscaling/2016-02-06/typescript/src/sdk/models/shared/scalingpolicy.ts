import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Alarms", elemType: shared.Alarm })
  alarms?: Alarm[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=PolicyARN" })
  policyArn: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=StepScalingPolicyConfiguration" })
  stepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

  @Metadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
}
