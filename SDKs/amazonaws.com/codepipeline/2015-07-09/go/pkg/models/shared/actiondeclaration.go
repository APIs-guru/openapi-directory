package shared

type ActionDeclaration struct {
	ActionTypeID    ActionTypeID      `json:"actionTypeId"`
	Configuration   map[string]string `json:"configuration"`
	InputArtifacts  []InputArtifact   `json:"inputArtifacts"`
	Name            string            `json:"name"`
	Namespace       *string           `json:"namespace"`
	OutputArtifacts []OutputArtifact  `json:"outputArtifacts"`
	Region          *string           `json:"region"`
	RoleArn         *string           `json:"roleArn"`
	RunOrder        *int64            `json:"runOrder"`
}
