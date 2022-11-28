import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
**/
export declare class PrivateLinkConfig extends SpeakeasyBase {
    privateLinkEndpoint?: string;
    securityGroupArns?: string[];
    subnetArns?: string[];
    vpcEndpointId?: string;
}
