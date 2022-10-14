package shared

type ListDeploymentTargetsOutput struct {
	NextToken *string  `json:"nextToken,omitempty"`
	TargetIds []string `json:"targetIds,omitempty"`
}
