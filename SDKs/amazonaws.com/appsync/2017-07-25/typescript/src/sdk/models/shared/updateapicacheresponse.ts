import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCache } from "./apicache";



// UpdateApiCacheResponse
/** 
 * Represents the output of a <code>UpdateApiCache</code> operation.
**/
export class UpdateApiCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
