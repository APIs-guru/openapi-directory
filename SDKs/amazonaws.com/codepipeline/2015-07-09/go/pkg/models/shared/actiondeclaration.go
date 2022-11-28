package shared

// ActionDeclaration
// Represents information about an action declaration.
type ActionDeclaration struct {
	ActionTypeID    ActionTypeID      `json:"actionTypeId"`
	Configuration   map[string]string `json:"configuration,omitempty"`
	InputArtifacts  []InputArtifact   `json:"inputArtifacts,omitempty"`
	Name            string            `json:"name"`
	Namespace       *string           `json:"namespace,omitempty"`
	OutputArtifacts []OutputArtifact  `json:"outputArtifacts,omitempty"`
	Region          *string           `json:"region,omitempty"`
	RoleArn         *string           `json:"roleArn,omitempty"`
	RunOrder        *int64            `json:"runOrder,omitempty"`
}
