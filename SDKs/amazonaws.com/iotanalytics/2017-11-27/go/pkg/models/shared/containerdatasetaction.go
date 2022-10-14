package shared

type ContainerDatasetAction struct {
	ExecutionRoleArn      string                `json:"executionRoleArn"`
	Image                 string                `json:"image"`
	ResourceConfiguration ResourceConfiguration `json:"resourceConfiguration"`
	Variables             []Variable            `json:"variables,omitempty"`
}
