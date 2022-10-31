package shared



type CreateCustomActionTypeInput struct {
    Category ActionCategoryEnum `json:"category"`
    ConfigurationProperties []ActionConfigurationProperty `json:"configurationProperties,omitempty"`
    InputArtifactDetails ArtifactDetails `json:"inputArtifactDetails"`
    OutputArtifactDetails ArtifactDetails `json:"outputArtifactDetails"`
    Provider string `json:"provider"`
    Settings *ActionTypeSettings `json:"settings,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    Version string `json:"version"`
    
}

