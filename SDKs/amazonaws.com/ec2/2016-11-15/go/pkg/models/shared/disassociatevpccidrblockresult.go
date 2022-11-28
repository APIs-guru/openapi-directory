package shared

type DisassociateVpcCidrBlockResult struct {
	CidrBlockAssociation     *VpcCidrBlockAssociation
	Ipv6CidrBlockAssociation *VpcIpv6CidrBlockAssociation
	VpcID                    *string
}
