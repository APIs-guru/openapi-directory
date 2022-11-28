package shared

// VpcPeeringConnectionVpcInfo
// Describes a VPC in a VPC peering connection.
type VpcPeeringConnectionVpcInfo struct {
	CidrBlock        *string
	CidrBlockSet     []CidrBlock
	Ipv6CidrBlockSet []Ipv6CidrBlock
	OwnerID          *string
	PeeringOptions   *VpcPeeringConnectionOptionsDescription
	Region           *string
	VpcID            *string
}
