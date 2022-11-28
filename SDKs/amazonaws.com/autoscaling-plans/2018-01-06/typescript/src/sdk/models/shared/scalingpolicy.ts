import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";



// ScalingPolicy
/** 
 * Represents a scaling policy.
**/
export class ScalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetTrackingConfiguration" })
  targetTrackingConfiguration?: TargetTrackingConfiguration;
}
