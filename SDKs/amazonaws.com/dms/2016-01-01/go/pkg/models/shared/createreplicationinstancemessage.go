package shared

type CreateReplicationInstanceMessage struct {
	AllocatedStorage                 *int64   `json:"AllocatedStorage"`
	AutoMinorVersionUpgrade          *bool    `json:"AutoMinorVersionUpgrade"`
	AvailabilityZone                 *string  `json:"AvailabilityZone"`
	DNSNameServers                   *string  `json:"DnsNameServers"`
	EngineVersion                    *string  `json:"EngineVersion"`
	KmsKeyID                         *string  `json:"KmsKeyId"`
	MultiAz                          *bool    `json:"MultiAZ"`
	PreferredMaintenanceWindow       *string  `json:"PreferredMaintenanceWindow"`
	PubliclyAccessible               *bool    `json:"PubliclyAccessible"`
	ReplicationInstanceClass         string   `json:"ReplicationInstanceClass"`
	ReplicationInstanceIdentifier    string   `json:"ReplicationInstanceIdentifier"`
	ReplicationSubnetGroupIdentifier *string  `json:"ReplicationSubnetGroupIdentifier"`
	ResourceIdentifier               *string  `json:"ResourceIdentifier"`
	Tags                             []Tag    `json:"Tags"`
	VpcSecurityGroupIds              []string `json:"VpcSecurityGroupIds"`
}
