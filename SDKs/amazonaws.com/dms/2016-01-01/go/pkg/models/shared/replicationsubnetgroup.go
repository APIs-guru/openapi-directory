package shared

type ReplicationSubnetGroup struct {
	ReplicationSubnetGroupDescription *string  `json:"ReplicationSubnetGroupDescription"`
	ReplicationSubnetGroupIdentifier  *string  `json:"ReplicationSubnetGroupIdentifier"`
	SubnetGroupStatus                 *string  `json:"SubnetGroupStatus"`
	Subnets                           []Subnet `json:"Subnets"`
	VpcID                             *string  `json:"VpcId"`
}
