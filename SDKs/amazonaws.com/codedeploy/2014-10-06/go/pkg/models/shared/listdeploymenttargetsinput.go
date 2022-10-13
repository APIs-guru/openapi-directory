package shared

type ListDeploymentTargetsInput struct {
	DeploymentID  *string             `json:"deploymentId"`
	NextToken     *string             `json:"nextToken"`
	TargetFilters map[string][]string `json:"targetFilters"`
}
