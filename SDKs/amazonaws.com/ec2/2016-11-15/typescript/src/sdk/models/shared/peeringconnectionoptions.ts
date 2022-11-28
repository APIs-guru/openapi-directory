import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PeeringConnectionOptions
/** 
 * Describes the VPC peering connection options.
**/
export class PeeringConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: boolean;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
