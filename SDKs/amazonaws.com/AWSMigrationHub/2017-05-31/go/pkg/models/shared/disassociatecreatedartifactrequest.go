package shared



type DisassociateCreatedArtifactRequest struct {
    CreatedArtifactName string `json:"CreatedArtifactName"`
    DryRun *bool `json:"DryRun,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    
}

