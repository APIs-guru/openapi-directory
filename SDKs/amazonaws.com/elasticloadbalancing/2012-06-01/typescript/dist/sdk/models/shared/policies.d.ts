import { SpeakeasyBase } from "../../../internal/utils";
import { AppCookieStickinessPolicy } from "./appcookiestickinesspolicy";
import { LbCookieStickinessPolicy } from "./lbcookiestickinesspolicy";
/**
 * The policies for a load balancer.
**/
export declare class Policies extends SpeakeasyBase {
    appCookieStickinessPolicies?: AppCookieStickinessPolicy[];
    lbCookieStickinessPolicies?: LbCookieStickinessPolicy[];
    otherPolicies?: string[];
}
