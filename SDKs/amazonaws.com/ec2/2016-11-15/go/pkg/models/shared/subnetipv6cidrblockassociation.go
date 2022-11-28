package shared

// SubnetIpv6CidrBlockAssociation
// Describes an IPv6 CIDR block associated with a subnet.
type SubnetIpv6CidrBlockAssociation struct {
	AssociationID      *string
	Ipv6CidrBlock      *string
	Ipv6CidrBlockState *SubnetCidrBlockState
}
