package shared

type ListDeploymentsResponse struct {
	Deployments []Deployment `json:"deployments,omitempty"`
	NextToken   *string      `json:"nextToken,omitempty"`
}
