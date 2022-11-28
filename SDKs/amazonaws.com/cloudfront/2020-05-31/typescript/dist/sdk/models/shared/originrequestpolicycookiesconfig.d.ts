import { SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicyCookieBehaviorEnum } from "./originrequestpolicycookiebehaviorenum";
import { CookieNames } from "./cookienames";
/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
**/
export declare class OriginRequestPolicyCookiesConfig extends SpeakeasyBase {
    cookieBehavior: OriginRequestPolicyCookieBehaviorEnum;
    cookies?: CookieNames;
}
