package shared

type DisassociateCreatedArtifactRequest struct {
	CreatedArtifactName  string `json:"CreatedArtifactName"`
	DryRun               *bool  `json:"DryRun"`
	MigrationTaskName    string `json:"MigrationTaskName"`
	ProgressUpdateStream string `json:"ProgressUpdateStream"`
}
