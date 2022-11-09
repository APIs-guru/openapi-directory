import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcPeeringConnectionStatus } from "./vpcpeeringconnectionstatus";


// VpcPeeringConnection
/** 
 * <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class VpcPeeringConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=GameLiftVpcId" })
  gameLiftVpcId?: string;

  @Metadata({ data: "json, name=IpV4CidrBlock" })
  ipV4CidrBlock?: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: VpcPeeringConnectionStatus;

  @Metadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}
