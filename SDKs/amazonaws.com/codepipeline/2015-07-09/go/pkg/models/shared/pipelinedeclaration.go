package shared



type PipelineDeclaration struct {
    ArtifactStore *ArtifactStore `json:"artifactStore,omitempty"`
    ArtifactStores map[string]ArtifactStore `json:"artifactStores,omitempty"`
    Name string `json:"name"`
    RoleArn string `json:"roleArn"`
    Stages []StageDeclaration `json:"stages"`
    Version *int64 `json:"version,omitempty"`
    
}

