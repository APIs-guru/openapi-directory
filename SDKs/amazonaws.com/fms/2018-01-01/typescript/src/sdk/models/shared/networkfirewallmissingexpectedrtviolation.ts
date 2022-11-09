import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkFirewallMissingExpectedRtViolation
/** 
 * Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
**/
export class NetworkFirewallMissingExpectedRtViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=CurrentRouteTable" })
  currentRouteTable?: string;

  @Metadata({ data: "json, name=ExpectedRouteTable" })
  expectedRouteTable?: string;

  @Metadata({ data: "json, name=VPC" })
  vpc?: string;

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;
}
