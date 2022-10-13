package shared

type ListDeploymentsOutput struct {
	Deployments []string `json:"deployments"`
	NextToken   *string  `json:"nextToken"`
}
