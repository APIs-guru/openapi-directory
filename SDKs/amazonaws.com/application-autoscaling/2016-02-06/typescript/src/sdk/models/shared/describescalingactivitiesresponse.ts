import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingActivity } from "./scalingactivity";


export class DescribeScalingActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScalingActivities", elemType: shared.ScalingActivity })
  scalingActivities?: ScalingActivity[];
}
