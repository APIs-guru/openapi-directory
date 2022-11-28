import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingPolicy } from "./scalingpolicy";



// DescribeScalingPoliciesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeScalingPoliciesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPolicies", elemType: ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];
}
