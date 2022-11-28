import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppCookieStickinessPolicy } from "./appcookiestickinesspolicy";
import { LbCookieStickinessPolicy } from "./lbcookiestickinesspolicy";



// Policies
/** 
 * The policies for a load balancer.
**/
export class Policies extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AppCookieStickinessPolicy })
  appCookieStickinessPolicies?: AppCookieStickinessPolicy[];

  @SpeakeasyMetadata({ elemType: LbCookieStickinessPolicy })
  lbCookieStickinessPolicies?: LbCookieStickinessPolicy[];

  @SpeakeasyMetadata()
  otherPolicies?: string[];
}
