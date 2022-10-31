package shared



type ImportMigrationTaskRequest struct {
    DryRun *bool `json:"DryRun,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    
}

