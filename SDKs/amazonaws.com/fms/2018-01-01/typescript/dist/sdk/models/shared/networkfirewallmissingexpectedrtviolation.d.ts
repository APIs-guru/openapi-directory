import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
**/
export declare class NetworkFirewallMissingExpectedRtViolation extends SpeakeasyBase {
    availabilityZone?: string;
    currentRouteTable?: string;
    expectedRouteTable?: string;
    vpc?: string;
    violationTarget?: string;
}
