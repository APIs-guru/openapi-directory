import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyHeaderBehaviorEnum } from "./cachepolicyheaderbehaviorenum";
import { Headers } from "./headers";



// CachePolicyHeadersConfig
/** 
 * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
export class CachePolicyHeadersConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerBehavior: CachePolicyHeaderBehaviorEnum;

  @SpeakeasyMetadata()
  headers?: Headers;
}
