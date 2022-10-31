package shared

type ListEffectiveDeploymentsResponse struct {
	EffectiveDeployments []EffectiveDeployment `json:"effectiveDeployments,omitempty"`
	NextToken            *string               `json:"nextToken,omitempty"`
}
