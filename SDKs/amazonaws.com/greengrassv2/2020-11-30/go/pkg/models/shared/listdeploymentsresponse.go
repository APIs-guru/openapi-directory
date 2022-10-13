package shared

type ListDeploymentsResponse struct {
	Deployments []Deployment `json:"deployments"`
	NextToken   *string      `json:"nextToken"`
}
