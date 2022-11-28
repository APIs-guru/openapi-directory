package shared

// CreateReplicationInstanceMessage
// <p/>
type CreateReplicationInstanceMessage struct {
	AllocatedStorage                 *int64   `json:"AllocatedStorage,omitempty"`
	AutoMinorVersionUpgrade          *bool    `json:"AutoMinorVersionUpgrade,omitempty"`
	AvailabilityZone                 *string  `json:"AvailabilityZone,omitempty"`
	DNSNameServers                   *string  `json:"DnsNameServers,omitempty"`
	EngineVersion                    *string  `json:"EngineVersion,omitempty"`
	KmsKeyID                         *string  `json:"KmsKeyId,omitempty"`
	MultiAz                          *bool    `json:"MultiAZ,omitempty"`
	PreferredMaintenanceWindow       *string  `json:"PreferredMaintenanceWindow,omitempty"`
	PubliclyAccessible               *bool    `json:"PubliclyAccessible,omitempty"`
	ReplicationInstanceClass         string   `json:"ReplicationInstanceClass"`
	ReplicationInstanceIdentifier    string   `json:"ReplicationInstanceIdentifier"`
	ReplicationSubnetGroupIdentifier *string  `json:"ReplicationSubnetGroupIdentifier,omitempty"`
	ResourceIdentifier               *string  `json:"ResourceIdentifier,omitempty"`
	Tags                             []Tag    `json:"Tags,omitempty"`
	VpcSecurityGroupIds              []string `json:"VpcSecurityGroupIds,omitempty"`
}
