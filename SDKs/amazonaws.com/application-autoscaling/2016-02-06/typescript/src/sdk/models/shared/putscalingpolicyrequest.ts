import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { StepScalingPolicyConfiguration } from "./stepscalingpolicyconfiguration";
import { TargetTrackingScalingPolicyConfiguration } from "./targettrackingscalingpolicyconfiguration";



export class PutScalingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeEnum;

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
