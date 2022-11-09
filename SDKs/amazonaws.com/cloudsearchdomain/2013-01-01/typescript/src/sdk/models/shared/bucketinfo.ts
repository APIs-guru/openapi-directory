import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";


// BucketInfo
/** 
 * A container for the calculated facet values and counts.
**/
export class BucketInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.Bucket })
  buckets?: Bucket[];
}
