package shared

type ListDeploymentTargetsOutput struct {
	NextToken *string  `json:"nextToken"`
	TargetIds []string `json:"targetIds"`
}
