package shared

// VpcIpv6CidrBlockAssociation
// Describes an IPv6 CIDR block associated with a VPC.
type VpcIpv6CidrBlockAssociation struct {
	AssociationID      *string
	Ipv6CidrBlock      *string
	Ipv6CidrBlockState *VpcCidrBlockState
	Ipv6Pool           *string
	NetworkBorderGroup *string
}
