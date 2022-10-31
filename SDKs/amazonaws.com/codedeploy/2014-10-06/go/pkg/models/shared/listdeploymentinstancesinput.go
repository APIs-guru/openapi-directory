package shared



type ListDeploymentInstancesInput struct {
    DeploymentID string `json:"deploymentId"`
    InstanceStatusFilter []InstanceStatusEnum `json:"instanceStatusFilter,omitempty"`
    InstanceTypeFilter []InstanceTypeEnum `json:"instanceTypeFilter,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

