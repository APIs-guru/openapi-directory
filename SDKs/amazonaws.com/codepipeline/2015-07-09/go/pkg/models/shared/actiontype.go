package shared

type ActionType struct {
	ActionConfigurationProperties []ActionConfigurationProperty `json:"actionConfigurationProperties"`
	ID                            ActionTypeID                  `json:"id"`
	InputArtifactDetails          ArtifactDetails               `json:"inputArtifactDetails"`
	OutputArtifactDetails         ArtifactDetails               `json:"outputArtifactDetails"`
	Settings                      *ActionTypeSettings           `json:"settings"`
}
