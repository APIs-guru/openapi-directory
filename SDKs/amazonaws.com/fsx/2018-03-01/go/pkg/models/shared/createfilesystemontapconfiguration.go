package shared



type CreateFileSystemOntapConfiguration struct {
    AutomaticBackupRetentionDays *int64 `json:"AutomaticBackupRetentionDays,omitempty"`
    DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime,omitempty"`
    DeploymentType OntapDeploymentTypeEnum `json:"DeploymentType"`
    DiskIopsConfiguration *DiskIopsConfiguration `json:"DiskIopsConfiguration,omitempty"`
    EndpointIPAddressRange *string `json:"EndpointIpAddressRange,omitempty"`
    FsxAdminPassword *string `json:"FsxAdminPassword,omitempty"`
    PreferredSubnetID *string `json:"PreferredSubnetId,omitempty"`
    RouteTableIds []string `json:"RouteTableIds,omitempty"`
    ThroughputCapacity int64 `json:"ThroughputCapacity"`
    WeeklyMaintenanceStartTime *string `json:"WeeklyMaintenanceStartTime,omitempty"`
    
}

