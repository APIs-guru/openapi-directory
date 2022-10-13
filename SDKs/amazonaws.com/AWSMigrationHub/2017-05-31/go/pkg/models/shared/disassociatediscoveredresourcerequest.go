package shared

type DisassociateDiscoveredResourceRequest struct {
	ConfigurationID      string `json:"ConfigurationId"`
	DryRun               *bool  `json:"DryRun"`
	MigrationTaskName    string `json:"MigrationTaskName"`
	ProgressUpdateStream string `json:"ProgressUpdateStream"`
}
