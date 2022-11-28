import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyCookieBehaviorEnum } from "./cachepolicycookiebehaviorenum";
import { CookieNames } from "./cookienames";
/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
export declare class CachePolicyCookiesConfig extends SpeakeasyBase {
    cookieBehavior: CachePolicyCookieBehaviorEnum;
    cookies?: CookieNames;
}
