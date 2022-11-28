package shared

// BatchGetDeploymentInstancesOutput
// Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
type BatchGetDeploymentInstancesOutput struct {
	ErrorMessage     *string           `json:"errorMessage,omitempty"`
	InstancesSummary []InstanceSummary `json:"instancesSummary,omitempty"`
}
