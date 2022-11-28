package shared

// UpdateJobOutput
// Output structure for the UpateJob operation.
type UpdateJobOutput struct {
	ArtifactList   []Artifact
	Success        *bool
	WarningMessage *string
}
