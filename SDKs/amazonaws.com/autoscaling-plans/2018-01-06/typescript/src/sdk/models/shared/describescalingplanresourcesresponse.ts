import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingPlanResource } from "./scalingplanresource";


export class DescribeScalingPlanResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPlanResources", elemType: shared.ScalingPlanResource })
  scalingPlanResources?: ScalingPlanResource[];
}
