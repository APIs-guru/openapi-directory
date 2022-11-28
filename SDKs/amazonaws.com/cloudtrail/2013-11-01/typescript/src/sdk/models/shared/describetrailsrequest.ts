import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTrailsRequest
/** 
 * Returns information about the trail.
**/
export class DescribeTrailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeShadowTrails" })
  includeShadowTrails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trailNameList" })
  trailNameList?: string[];
}
