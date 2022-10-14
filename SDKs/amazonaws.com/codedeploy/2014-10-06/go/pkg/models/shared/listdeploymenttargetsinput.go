package shared

type ListDeploymentTargetsInput struct {
	DeploymentID  *string             `json:"deploymentId,omitempty"`
	NextToken     *string             `json:"nextToken,omitempty"`
	TargetFilters map[string][]string `json:"targetFilters,omitempty"`
}
