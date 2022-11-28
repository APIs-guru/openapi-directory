import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CookiePreference } from "./cookiepreference";
import { Headers } from "./headers";
import { QueryStringCacheKeys } from "./querystringcachekeys";



// ForwardedValues
/** 
 * A complex type that specifies how CloudFront handles query strings and cookies.
**/
export class ForwardedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookies: CookiePreference;

  @SpeakeasyMetadata()
  headers?: Headers;

  @SpeakeasyMetadata()
  queryString: boolean;

  @SpeakeasyMetadata()
  queryStringCacheKeys?: QueryStringCacheKeys;
}
