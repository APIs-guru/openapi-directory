import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcPeeringAuthorization
/** 
 * <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class VpcPeeringAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @Metadata({ data: "json, name=GameLiftAwsAccountId" })
  gameLiftAwsAccountId?: string;

  @Metadata({ data: "json, name=PeerVpcAwsAccountId" })
  peerVpcAwsAccountId?: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId?: string;
}
