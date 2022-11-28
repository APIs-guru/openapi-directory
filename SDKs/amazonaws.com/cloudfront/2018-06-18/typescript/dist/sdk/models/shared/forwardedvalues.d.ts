import { SpeakeasyBase } from "../../../internal/utils";
import { CookiePreference } from "./cookiepreference";
import { Headers } from "./headers";
import { QueryStringCacheKeys } from "./querystringcachekeys";
/**
 * A complex type that specifies how CloudFront handles query strings and cookies.
**/
export declare class ForwardedValues extends SpeakeasyBase {
    cookies: CookiePreference;
    headers?: Headers;
    queryString: boolean;
    queryStringCacheKeys?: QueryStringCacheKeys;
}
