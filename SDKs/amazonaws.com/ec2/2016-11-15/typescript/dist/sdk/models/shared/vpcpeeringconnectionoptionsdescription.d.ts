import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the VPC peering connection options.
**/
export declare class VpcPeeringConnectionOptionsDescription extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
