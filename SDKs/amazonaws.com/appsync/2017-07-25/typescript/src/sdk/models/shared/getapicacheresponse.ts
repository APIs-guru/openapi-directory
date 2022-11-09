import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCache } from "./apicache";


// GetApiCacheResponse
/** 
 * Represents the output of a <code>GetApiCache</code> operation.
**/
export class GetApiCacheResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
