import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyCookiesConfig } from "./cachepolicycookiesconfig";
import { CachePolicyHeadersConfig } from "./cachepolicyheadersconfig";
import { CachePolicyQueryStringsConfig } from "./cachepolicyquerystringsconfig";



// ParametersInCacheKeyAndForwardedToOrigin
/** 
 * <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find an object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
**/
export class ParametersInCacheKeyAndForwardedToOrigin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookiesConfig: CachePolicyCookiesConfig;

  @SpeakeasyMetadata()
  enableAcceptEncodingBrotli?: boolean;

  @SpeakeasyMetadata()
  enableAcceptEncodingGzip: boolean;

  @SpeakeasyMetadata()
  headersConfig: CachePolicyHeadersConfig;

  @SpeakeasyMetadata()
  queryStringsConfig: CachePolicyQueryStringsConfig;
}
