import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateLinkConfig
/** 
 * The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
**/
export class PrivateLinkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrivateLinkEndpoint" })
  privateLinkEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetArns" })
  subnetArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: string;
}
