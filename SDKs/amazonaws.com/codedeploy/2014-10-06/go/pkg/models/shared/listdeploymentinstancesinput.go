package shared

type ListDeploymentInstancesInput struct {
	DeploymentID         string               `json:"deploymentId"`
	InstanceStatusFilter []InstanceStatusEnum `json:"instanceStatusFilter"`
	InstanceTypeFilter   []InstanceTypeEnum   `json:"instanceTypeFilter"`
	NextToken            *string              `json:"nextToken"`
}
