package shared



type BatchGetDeploymentInstancesOutput struct {
    ErrorMessage *string `json:"errorMessage,omitempty"`
    InstancesSummary []InstanceSummary `json:"instancesSummary,omitempty"`
    
}

