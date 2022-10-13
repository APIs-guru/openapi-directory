package shared

type OntapFileSystemConfiguration struct {
	AutomaticBackupRetentionDays  *int64                   `json:"AutomaticBackupRetentionDays"`
	DailyAutomaticBackupStartTime *string                  `json:"DailyAutomaticBackupStartTime"`
	DeploymentType                *OntapDeploymentTypeEnum `json:"DeploymentType"`
	DiskIopsConfiguration         *DiskIopsConfiguration   `json:"DiskIopsConfiguration"`
	EndpointIPAddressRange        *string                  `json:"EndpointIpAddressRange"`
	Endpoints                     *FileSystemEndpoints     `json:"Endpoints"`
	PreferredSubnetID             *string                  `json:"PreferredSubnetId"`
	RouteTableIds                 []string                 `json:"RouteTableIds"`
	ThroughputCapacity            *int64                   `json:"ThroughputCapacity"`
	WeeklyMaintenanceStartTime    *string                  `json:"WeeklyMaintenanceStartTime"`
}
