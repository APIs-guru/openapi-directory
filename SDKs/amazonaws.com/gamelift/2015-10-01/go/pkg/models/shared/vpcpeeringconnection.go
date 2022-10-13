package shared

type VpcPeeringConnection struct {
	FleetArn               *string                     `json:"FleetArn"`
	FleetID                *string                     `json:"FleetId"`
	GameLiftVpcID          *string                     `json:"GameLiftVpcId"`
	IPV4CidrBlock          *string                     `json:"IpV4CidrBlock"`
	PeerVpcID              *string                     `json:"PeerVpcId"`
	Status                 *VpcPeeringConnectionStatus `json:"Status"`
	VpcPeeringConnectionID *string                     `json:"VpcPeeringConnectionId"`
}
