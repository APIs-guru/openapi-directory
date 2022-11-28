import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingPolicy } from "./scalingpolicy";



export class PoliciesType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];
}
