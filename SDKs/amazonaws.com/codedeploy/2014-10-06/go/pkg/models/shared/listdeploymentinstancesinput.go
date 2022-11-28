package shared

// ListDeploymentInstancesInput
//
//	Represents the input of a <code>ListDeploymentInstances</code> operation.
type ListDeploymentInstancesInput struct {
	DeploymentID         string               `json:"deploymentId"`
	InstanceStatusFilter []InstanceStatusEnum `json:"instanceStatusFilter,omitempty"`
	InstanceTypeFilter   []InstanceTypeEnum   `json:"instanceTypeFilter,omitempty"`
	NextToken            *string              `json:"nextToken,omitempty"`
}
