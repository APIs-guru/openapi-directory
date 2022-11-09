import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCache } from "./apicache";


// CreateApiCacheResponse
/** 
 * Represents the output of a <code>CreateApiCache</code> operation.
**/
export class CreateApiCacheResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
