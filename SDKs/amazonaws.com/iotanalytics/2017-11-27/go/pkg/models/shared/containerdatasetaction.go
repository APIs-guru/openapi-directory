package shared

// ContainerDatasetAction
// Information required to run the <code>containerAction</code> to produce dataset contents.
type ContainerDatasetAction struct {
	ExecutionRoleArn      string                `json:"executionRoleArn"`
	Image                 string                `json:"image"`
	ResourceConfiguration ResourceConfiguration `json:"resourceConfiguration"`
	Variables             []Variable            `json:"variables,omitempty"`
}
