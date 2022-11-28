import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkFirewallMissingSubnetViolation
/** 
 * Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
**/
export class NetworkFirewallMissingSubnetViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetViolationReason" })
  targetViolationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=VPC" })
  vpc?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
