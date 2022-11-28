import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LbCookieStickinessPolicy
/** 
 * Information about a policy for duration-based session stickiness.
**/
export class LbCookieStickinessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookieExpirationPeriod?: number;

  @SpeakeasyMetadata()
  policyName?: string;
}
