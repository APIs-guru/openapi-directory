import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrailInfo
/** 
 * Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
**/
export class TrailInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
