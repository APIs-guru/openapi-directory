import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkFirewallMissingFirewallViolation
/** 
 * Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
**/
export class NetworkFirewallMissingFirewallViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=TargetViolationReason" })
  targetViolationReason?: string;

  @Metadata({ data: "json, name=VPC" })
  vpc?: string;

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
