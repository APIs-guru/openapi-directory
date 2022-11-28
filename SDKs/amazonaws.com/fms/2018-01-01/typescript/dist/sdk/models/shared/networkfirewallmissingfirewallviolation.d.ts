import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.
**/
export declare class NetworkFirewallMissingFirewallViolation extends SpeakeasyBase {
    availabilityZone?: string;
    targetViolationReason?: string;
    vpc?: string;
    violationTarget?: string;
}
