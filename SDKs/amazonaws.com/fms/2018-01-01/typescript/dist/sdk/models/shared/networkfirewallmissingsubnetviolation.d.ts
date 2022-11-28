import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
**/
export declare class NetworkFirewallMissingSubnetViolation extends SpeakeasyBase {
    availabilityZone?: string;
    targetViolationReason?: string;
    vpc?: string;
    violationTarget?: string;
}
