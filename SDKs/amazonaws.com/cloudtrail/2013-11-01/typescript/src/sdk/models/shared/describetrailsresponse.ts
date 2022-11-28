import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trail } from "./trail";



// DescribeTrailsResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class DescribeTrailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trailList", elemType: Trail })
  trailList?: Trail[];
}
