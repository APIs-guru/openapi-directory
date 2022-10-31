package shared



type ModifyReplicationSubnetGroupMessage struct {
    ReplicationSubnetGroupDescription *string `json:"ReplicationSubnetGroupDescription,omitempty"`
    ReplicationSubnetGroupIdentifier string `json:"ReplicationSubnetGroupIdentifier"`
    SubnetIds []string `json:"SubnetIds"`
    
}

