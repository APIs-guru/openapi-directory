import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTrailsRequest
/** 
 * Returns information about the trail.
**/
export class DescribeTrailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeShadowTrails" })
  includeShadowTrails?: boolean;

  @Metadata({ data: "json, name=trailNameList" })
  trailNameList?: string[];
}
