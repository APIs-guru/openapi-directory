import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingActivity } from "./scalingactivity";



export class DescribeScalingActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingActivities", elemType: ScalingActivity })
  scalingActivities?: ScalingActivity[];
}
