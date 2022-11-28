import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppCookieStickinessPolicy
/** 
 * Information about a policy for application-controlled session stickiness.
**/
export class AppCookieStickinessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookieName?: string;

  @SpeakeasyMetadata()
  policyName?: string;
}
