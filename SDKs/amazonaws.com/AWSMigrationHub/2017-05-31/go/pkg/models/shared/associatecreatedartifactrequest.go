package shared



type AssociateCreatedArtifactRequest struct {
    CreatedArtifact CreatedArtifact `json:"CreatedArtifact"`
    DryRun *bool `json:"DryRun,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    
}

