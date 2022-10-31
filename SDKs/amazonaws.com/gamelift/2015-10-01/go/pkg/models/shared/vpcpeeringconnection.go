package shared

type VpcPeeringConnection struct {
	FleetArn               *string                     `json:"FleetArn,omitempty"`
	FleetID                *string                     `json:"FleetId,omitempty"`
	GameLiftVpcID          *string                     `json:"GameLiftVpcId,omitempty"`
	IPV4CidrBlock          *string                     `json:"IpV4CidrBlock,omitempty"`
	PeerVpcID              *string                     `json:"PeerVpcId,omitempty"`
	Status                 *VpcPeeringConnectionStatus `json:"Status,omitempty"`
	VpcPeeringConnectionID *string                     `json:"VpcPeeringConnectionId,omitempty"`
}
