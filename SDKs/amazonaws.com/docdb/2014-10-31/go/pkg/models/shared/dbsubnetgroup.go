package shared

// DbSubnetGroup
// Detailed information about a subnet group.
type DbSubnetGroup struct {
	DbSubnetGroupArn         *string
	DbSubnetGroupDescription *string
	DbSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []Subnet
	VpcID                    *string
}
