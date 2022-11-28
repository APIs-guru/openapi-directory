package shared

// Subnet
// Describes a subnet.
type Subnet struct {
	AssignIpv6AddressOnCreation *bool
	AvailabilityZone            *string
	AvailabilityZoneID          *string
	AvailableIPAddressCount     *int64
	CidrBlock                   *string
	CustomerOwnedIpv4Pool       *string
	DefaultForAz                *bool
	Ipv6CidrBlockAssociationSet []SubnetIpv6CidrBlockAssociation
	MapCustomerOwnedIPOnLaunch  *bool
	MapPublicIPOnLaunch         *bool
	OutpostArn                  *string
	OwnerID                     *string
	State                       *SubnetStateEnum
	SubnetArn                   *string
	SubnetID                    *string
	Tags                        []Tag
	VpcID                       *string
}
