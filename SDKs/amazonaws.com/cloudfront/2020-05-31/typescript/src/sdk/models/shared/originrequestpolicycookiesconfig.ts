import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyCookieBehaviorEnum } from "./originrequestpolicycookiebehaviorenum";
import { CookieNames } from "./cookienames";



// OriginRequestPolicyCookiesConfig
/** 
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
**/
export class OriginRequestPolicyCookiesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookieBehavior: OriginRequestPolicyCookieBehaviorEnum;

  @SpeakeasyMetadata()
  cookies?: CookieNames;
}
