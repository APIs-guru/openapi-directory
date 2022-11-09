import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingPolicy } from "./scalingpolicy";


export class DescribeScalingPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPolicies", elemType: shared.ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];
}
