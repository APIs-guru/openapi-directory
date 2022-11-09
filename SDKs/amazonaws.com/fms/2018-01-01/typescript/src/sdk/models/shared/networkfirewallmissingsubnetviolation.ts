import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkFirewallMissingSubnetViolation
/** 
 * Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
**/
export class NetworkFirewallMissingSubnetViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=TargetViolationReason" })
  targetViolationReason?: string;

  @Metadata({ data: "json, name=VPC" })
  vpc?: string;

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
