import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



// BucketInfo
/** 
 * A container for the calculated facet values and counts.
**/
export class BucketInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: Bucket })
  buckets?: Bucket[];
}
