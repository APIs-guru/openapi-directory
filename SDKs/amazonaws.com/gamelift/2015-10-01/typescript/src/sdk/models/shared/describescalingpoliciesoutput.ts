import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingPolicy } from "./scalingpolicy";


// DescribeScalingPoliciesOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeScalingPoliciesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPolicies", elemType: shared.ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];
}
