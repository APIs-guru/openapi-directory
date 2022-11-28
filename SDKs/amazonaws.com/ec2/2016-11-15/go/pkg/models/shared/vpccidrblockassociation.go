package shared

// VpcCidrBlockAssociation
// Describes an IPv4 CIDR block associated with a VPC.
type VpcCidrBlockAssociation struct {
	AssociationID  *string
	CidrBlock      *string
	CidrBlockState *VpcCidrBlockState
}
