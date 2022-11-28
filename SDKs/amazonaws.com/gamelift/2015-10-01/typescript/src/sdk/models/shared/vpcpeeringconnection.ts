import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnectionStatus } from "./vpcpeeringconnectionstatus";



// VpcPeeringConnection
/** 
 * <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class VpcPeeringConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=GameLiftVpcId" })
  gameLiftVpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpV4CidrBlock" })
  ipV4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcId" })
  peerVpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: VpcPeeringConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}
