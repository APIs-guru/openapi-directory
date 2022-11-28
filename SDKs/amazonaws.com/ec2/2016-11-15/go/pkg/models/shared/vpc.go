package shared

// Vpc
// Describes a VPC.
type Vpc struct {
	CidrBlock                   *string
	CidrBlockAssociationSet     []VpcCidrBlockAssociation
	DhcpOptionsID               *string
	InstanceTenancy             *TenancyEnum
	Ipv6CidrBlockAssociationSet []VpcIpv6CidrBlockAssociation
	IsDefault                   *bool
	OwnerID                     *string
	State                       *VpcStateEnum
	Tags                        []Tag
	VpcID                       *string
}
