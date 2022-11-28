import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingPlan } from "./scalingplan";



export class DescribeScalingPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlans", elemType: ScalingPlan })
  scalingPlans?: ScalingPlan[];
}
