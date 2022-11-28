import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCache } from "./apicache";



// CreateApiCacheResponse
/** 
 * Represents the output of a <code>CreateApiCache</code> operation.
**/
export class CreateApiCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
