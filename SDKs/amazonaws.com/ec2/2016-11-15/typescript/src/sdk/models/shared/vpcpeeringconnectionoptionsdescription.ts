import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcPeeringConnectionOptionsDescription
/** 
 * Describes the VPC peering connection options.
**/
export class VpcPeeringConnectionOptionsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: boolean;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
