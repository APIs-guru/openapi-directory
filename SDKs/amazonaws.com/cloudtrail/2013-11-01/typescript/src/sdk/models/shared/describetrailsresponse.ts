import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trail } from "./trail";


// DescribeTrailsResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class DescribeTrailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=trailList", elemType: shared.Trail })
  trailList?: Trail[];
}
