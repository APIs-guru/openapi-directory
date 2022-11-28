import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingPlanResource } from "./scalingplanresource";



export class DescribeScalingPlanResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanResources", elemType: ScalingPlanResource })
  scalingPlanResources?: ScalingPlanResource[];
}
