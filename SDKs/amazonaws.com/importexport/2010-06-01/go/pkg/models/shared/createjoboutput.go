package shared

// CreateJobOutput
// Output structure for the CreateJob operation.
type CreateJobOutput struct {
	ArtifactList          []Artifact
	JobID                 *string
	JobType               *JobTypeEnum
	Signature             *string
	SignatureFileContents *string
	WarningMessage        *string
}
