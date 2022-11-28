package shared

type DisassociateSubnetCidrBlockResult struct {
	Ipv6CidrBlockAssociation *SubnetIpv6CidrBlockAssociation
	SubnetID                 *string
}
