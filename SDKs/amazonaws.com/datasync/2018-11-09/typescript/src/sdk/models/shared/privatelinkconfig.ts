import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateLinkConfig
/** 
 * The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
**/
export class PrivateLinkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrivateLinkEndpoint" })
  privateLinkEndpoint?: string;

  @Metadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @Metadata({ data: "json, name=SubnetArns" })
  subnetArns?: string[];

  @Metadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: string;
}
