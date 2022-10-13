package shared

type ActionExecutionInput struct {
	ActionTypeID          *ActionTypeID     `json:"actionTypeId"`
	Configuration         map[string]string `json:"configuration"`
	InputArtifacts        []ArtifactDetail  `json:"inputArtifacts"`
	Namespace             *string           `json:"namespace"`
	Region                *string           `json:"region"`
	ResolvedConfiguration map[string]string `json:"resolvedConfiguration"`
	RoleArn               *string           `json:"roleArn"`
}
