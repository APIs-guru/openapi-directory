package shared

type ImportMigrationTaskRequest struct {
	DryRun               *bool  `json:"DryRun"`
	MigrationTaskName    string `json:"MigrationTaskName"`
	ProgressUpdateStream string `json:"ProgressUpdateStream"`
}
