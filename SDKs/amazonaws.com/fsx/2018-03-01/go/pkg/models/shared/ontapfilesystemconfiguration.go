package shared

type OntapFileSystemConfiguration struct {
	AutomaticBackupRetentionDays  *int64                   `json:"AutomaticBackupRetentionDays,omitempty"`
	DailyAutomaticBackupStartTime *string                  `json:"DailyAutomaticBackupStartTime,omitempty"`
	DeploymentType                *OntapDeploymentTypeEnum `json:"DeploymentType,omitempty"`
	DiskIopsConfiguration         *DiskIopsConfiguration   `json:"DiskIopsConfiguration,omitempty"`
	EndpointIPAddressRange        *string                  `json:"EndpointIpAddressRange,omitempty"`
	Endpoints                     *FileSystemEndpoints     `json:"Endpoints,omitempty"`
	PreferredSubnetID             *string                  `json:"PreferredSubnetId,omitempty"`
	RouteTableIds                 []string                 `json:"RouteTableIds,omitempty"`
	ThroughputCapacity            *int64                   `json:"ThroughputCapacity,omitempty"`
	WeeklyMaintenanceStartTime    *string                  `json:"WeeklyMaintenanceStartTime,omitempty"`
}
