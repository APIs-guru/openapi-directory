package shared

type AssociateDiscoveredResourceRequest struct {
	DiscoveredResource   DiscoveredResource `json:"DiscoveredResource"`
	DryRun               *bool              `json:"DryRun"`
	MigrationTaskName    string             `json:"MigrationTaskName"`
	ProgressUpdateStream string             `json:"ProgressUpdateStream"`
}
