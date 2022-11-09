import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSource } from "./applicationsource";


export class DescribeScalingPlansRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSources", elemType: shared.ApplicationSource })
  applicationSources?: ApplicationSource[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingPlanNames" })
  scalingPlanNames?: string[];

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion?: number;
}
