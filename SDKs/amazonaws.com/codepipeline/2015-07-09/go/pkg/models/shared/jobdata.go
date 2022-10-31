package shared



type JobData struct {
    ActionConfiguration *ActionConfiguration `json:"actionConfiguration,omitempty"`
    ActionTypeID *ActionTypeID `json:"actionTypeId,omitempty"`
    ArtifactCredentials *AwsSessionCredentials `json:"artifactCredentials,omitempty"`
    ContinuationToken *string `json:"continuationToken,omitempty"`
    EncryptionKey *EncryptionKey `json:"encryptionKey,omitempty"`
    InputArtifacts []Artifact `json:"inputArtifacts,omitempty"`
    OutputArtifacts []Artifact `json:"outputArtifacts,omitempty"`
    PipelineContext *PipelineContext `json:"pipelineContext,omitempty"`
    
}

