import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a policy for duration-based session stickiness.
**/
export declare class LbCookieStickinessPolicy extends SpeakeasyBase {
    cookieExpirationPeriod?: number;
    policyName?: string;
}
