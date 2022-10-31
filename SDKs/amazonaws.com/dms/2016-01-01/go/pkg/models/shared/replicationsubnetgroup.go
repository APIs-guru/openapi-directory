package shared



type ReplicationSubnetGroup struct {
    ReplicationSubnetGroupDescription *string `json:"ReplicationSubnetGroupDescription,omitempty"`
    ReplicationSubnetGroupIdentifier *string `json:"ReplicationSubnetGroupIdentifier,omitempty"`
    SubnetGroupStatus *string `json:"SubnetGroupStatus,omitempty"`
    Subnets []Subnet `json:"Subnets,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

