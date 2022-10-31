package shared



type AssociateDiscoveredResourceRequest struct {
    DiscoveredResource DiscoveredResource `json:"DiscoveredResource"`
    DryRun *bool `json:"DryRun,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    
}

