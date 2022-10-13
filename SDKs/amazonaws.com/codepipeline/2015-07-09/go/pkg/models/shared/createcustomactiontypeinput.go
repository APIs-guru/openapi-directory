package shared

type CreateCustomActionTypeInput struct {
	Category                ActionCategoryEnum            `json:"category"`
	ConfigurationProperties []ActionConfigurationProperty `json:"configurationProperties"`
	InputArtifactDetails    ArtifactDetails               `json:"inputArtifactDetails"`
	OutputArtifactDetails   ArtifactDetails               `json:"outputArtifactDetails"`
	Provider                string                        `json:"provider"`
	Settings                *ActionTypeSettings           `json:"settings"`
	Tags                    []Tag                         `json:"tags"`
	Version                 string                        `json:"version"`
}
