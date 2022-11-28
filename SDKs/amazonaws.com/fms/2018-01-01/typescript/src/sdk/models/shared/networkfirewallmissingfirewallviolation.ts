import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkFirewallMissingFirewallViolation
/** 
 * Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
**/
export class NetworkFirewallMissingFirewallViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetViolationReason" })
  targetViolationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=VPC" })
  vpc?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
