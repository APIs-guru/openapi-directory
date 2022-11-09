import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
