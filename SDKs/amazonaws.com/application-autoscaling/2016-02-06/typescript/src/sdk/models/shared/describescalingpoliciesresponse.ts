import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingPolicy } from "./scalingpolicy";



export class DescribeScalingPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPolicies", elemType: ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];
}
