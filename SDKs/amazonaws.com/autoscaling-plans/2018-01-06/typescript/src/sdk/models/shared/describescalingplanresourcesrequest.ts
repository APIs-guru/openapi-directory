import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
