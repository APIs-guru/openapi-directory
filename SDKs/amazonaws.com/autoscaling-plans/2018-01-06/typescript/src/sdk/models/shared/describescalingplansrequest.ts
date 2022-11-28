import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSource } from "./applicationsource";



export class DescribeScalingPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSources", elemType: ApplicationSource })
  applicationSources?: ApplicationSource[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanNames" })
  scalingPlanNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion?: number;
}
