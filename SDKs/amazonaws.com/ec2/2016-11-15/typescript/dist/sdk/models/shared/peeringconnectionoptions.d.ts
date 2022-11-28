import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the VPC peering connection options.
**/
export declare class PeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
