import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyCookieBehaviorEnum } from "./cachepolicycookiebehaviorenum";
import { CookieNames } from "./cookienames";



// CachePolicyCookiesConfig
/** 
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
export class CachePolicyCookiesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookieBehavior: CachePolicyCookieBehaviorEnum;

  @SpeakeasyMetadata()
  cookies?: CookieNames;
}
