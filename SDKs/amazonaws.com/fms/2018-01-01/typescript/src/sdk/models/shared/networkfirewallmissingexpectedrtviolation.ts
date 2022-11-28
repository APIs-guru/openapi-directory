import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkFirewallMissingExpectedRtViolation
/** 
 * Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
**/
export class NetworkFirewallMissingExpectedRtViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentRouteTable" })
  currentRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedRouteTable" })
  expectedRouteTable?: string;

  @SpeakeasyMetadata({ data: "json, name=VPC" })
  vpc?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
