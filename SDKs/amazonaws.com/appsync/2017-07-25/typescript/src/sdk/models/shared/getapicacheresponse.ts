import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCache } from "./apicache";



// GetApiCacheResponse
/** 
 * Represents the output of a <code>GetApiCache</code> operation.
**/
export class GetApiCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
