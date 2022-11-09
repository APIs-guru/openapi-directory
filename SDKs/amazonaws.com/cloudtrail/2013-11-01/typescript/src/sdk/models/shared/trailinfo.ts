import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrailInfo
/** 
 * Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
**/
export class TrailInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
