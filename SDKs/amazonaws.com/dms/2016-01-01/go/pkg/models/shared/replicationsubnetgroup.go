package shared

// ReplicationSubnetGroup
// Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
type ReplicationSubnetGroup struct {
	ReplicationSubnetGroupDescription *string  `json:"ReplicationSubnetGroupDescription,omitempty"`
	ReplicationSubnetGroupIdentifier  *string  `json:"ReplicationSubnetGroupIdentifier,omitempty"`
	SubnetGroupStatus                 *string  `json:"SubnetGroupStatus,omitempty"`
	Subnets                           []Subnet `json:"Subnets,omitempty"`
	VpcID                             *string  `json:"VpcId,omitempty"`
}
