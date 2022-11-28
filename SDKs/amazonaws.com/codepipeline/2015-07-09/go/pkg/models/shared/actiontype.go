package shared

// ActionType
// Returns information about the details of an action type.
type ActionType struct {
	ActionConfigurationProperties []ActionConfigurationProperty `json:"actionConfigurationProperties,omitempty"`
	ID                            ActionTypeID                  `json:"id"`
	InputArtifactDetails          ArtifactDetails               `json:"inputArtifactDetails"`
	OutputArtifactDetails         ArtifactDetails               `json:"outputArtifactDetails"`
	Settings                      *ActionTypeSettings           `json:"settings,omitempty"`
}
