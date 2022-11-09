import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingPlan } from "./scalingplan";


export class DescribeScalingPlansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPlans", elemType: shared.ScalingPlan })
  scalingPlans?: ScalingPlan[];
}
