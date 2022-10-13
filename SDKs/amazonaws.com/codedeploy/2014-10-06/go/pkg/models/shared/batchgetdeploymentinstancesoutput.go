package shared

type BatchGetDeploymentInstancesOutput struct {
	ErrorMessage     *string           `json:"errorMessage"`
	InstancesSummary []InstanceSummary `json:"instancesSummary"`
}
