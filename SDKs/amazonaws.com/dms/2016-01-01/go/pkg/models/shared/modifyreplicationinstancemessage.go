package shared

type ModifyReplicationInstanceMessage struct {
	AllocatedStorage              *int64   `json:"AllocatedStorage"`
	AllowMajorVersionUpgrade      *bool    `json:"AllowMajorVersionUpgrade"`
	ApplyImmediately              *bool    `json:"ApplyImmediately"`
	AutoMinorVersionUpgrade       *bool    `json:"AutoMinorVersionUpgrade"`
	EngineVersion                 *string  `json:"EngineVersion"`
	MultiAz                       *bool    `json:"MultiAZ"`
	PreferredMaintenanceWindow    *string  `json:"PreferredMaintenanceWindow"`
	ReplicationInstanceArn        string   `json:"ReplicationInstanceArn"`
	ReplicationInstanceClass      *string  `json:"ReplicationInstanceClass"`
	ReplicationInstanceIdentifier *string  `json:"ReplicationInstanceIdentifier"`
	VpcSecurityGroupIds           []string `json:"VpcSecurityGroupIds"`
}
