package shared

// VpcPeeringConnection
// <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type VpcPeeringConnection struct {
	FleetArn               *string                     `json:"FleetArn,omitempty"`
	FleetID                *string                     `json:"FleetId,omitempty"`
	GameLiftVpcID          *string                     `json:"GameLiftVpcId,omitempty"`
	IPV4CidrBlock          *string                     `json:"IpV4CidrBlock,omitempty"`
	PeerVpcID              *string                     `json:"PeerVpcId,omitempty"`
	Status                 *VpcPeeringConnectionStatus `json:"Status,omitempty"`
	VpcPeeringConnectionID *string                     `json:"VpcPeeringConnectionId,omitempty"`
}
