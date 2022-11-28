package shared

// ModifyReplicationInstanceMessage
// <p/>
type ModifyReplicationInstanceMessage struct {
	AllocatedStorage              *int64   `json:"AllocatedStorage,omitempty"`
	AllowMajorVersionUpgrade      *bool    `json:"AllowMajorVersionUpgrade,omitempty"`
	ApplyImmediately              *bool    `json:"ApplyImmediately,omitempty"`
	AutoMinorVersionUpgrade       *bool    `json:"AutoMinorVersionUpgrade,omitempty"`
	EngineVersion                 *string  `json:"EngineVersion,omitempty"`
	MultiAz                       *bool    `json:"MultiAZ,omitempty"`
	PreferredMaintenanceWindow    *string  `json:"PreferredMaintenanceWindow,omitempty"`
	ReplicationInstanceArn        string   `json:"ReplicationInstanceArn"`
	ReplicationInstanceClass      *string  `json:"ReplicationInstanceClass,omitempty"`
	ReplicationInstanceIdentifier *string  `json:"ReplicationInstanceIdentifier,omitempty"`
	VpcSecurityGroupIds           []string `json:"VpcSecurityGroupIds,omitempty"`
}
