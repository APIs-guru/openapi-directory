package shared

type ThirdPartyJobData struct {
	ActionConfiguration *ActionConfiguration   `json:"actionConfiguration"`
	ActionTypeID        *ActionTypeID          `json:"actionTypeId"`
	ArtifactCredentials *AwsSessionCredentials `json:"artifactCredentials"`
	ContinuationToken   *string                `json:"continuationToken"`
	EncryptionKey       *EncryptionKey         `json:"encryptionKey"`
	InputArtifacts      []Artifact             `json:"inputArtifacts"`
	OutputArtifacts     []Artifact             `json:"outputArtifacts"`
	PipelineContext     *PipelineContext       `json:"pipelineContext"`
}
