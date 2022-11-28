package shared

type AssociateVpcCidrBlockResult struct {
	CidrBlockAssociation     *VpcCidrBlockAssociation
	Ipv6CidrBlockAssociation *VpcIpv6CidrBlockAssociation
	VpcID                    *string
}
