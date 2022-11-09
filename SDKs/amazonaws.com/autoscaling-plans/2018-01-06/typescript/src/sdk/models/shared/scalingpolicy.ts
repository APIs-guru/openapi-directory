import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";


// ScalingPolicy
/** 
 * Represents a scaling policy.
**/
export class ScalingPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @Metadata({ data: "json, name=TargetTrackingConfiguration" })
  targetTrackingConfiguration?: TargetTrackingConfiguration;
}
