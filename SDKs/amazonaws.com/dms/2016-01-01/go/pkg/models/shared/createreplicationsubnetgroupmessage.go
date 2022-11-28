package shared

// CreateReplicationSubnetGroupMessage
// <p/>
type CreateReplicationSubnetGroupMessage struct {
	ReplicationSubnetGroupDescription string   `json:"ReplicationSubnetGroupDescription"`
	ReplicationSubnetGroupIdentifier  string   `json:"ReplicationSubnetGroupIdentifier"`
	SubnetIds                         []string `json:"SubnetIds"`
	Tags                              []Tag    `json:"Tags,omitempty"`
}
