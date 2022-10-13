package shared

type ListDeploymentsResponse struct {
	Deployments []Deployment `json:"Deployments"`
	NextToken   *string      `json:"NextToken"`
}
