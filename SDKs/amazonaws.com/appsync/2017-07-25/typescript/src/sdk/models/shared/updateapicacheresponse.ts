import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCache } from "./apicache";


// UpdateApiCacheResponse
/** 
 * Represents the output of a <code>UpdateApiCache</code> operation.
**/
export class UpdateApiCacheResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCache" })
  apiCache?: ApiCache;
}
