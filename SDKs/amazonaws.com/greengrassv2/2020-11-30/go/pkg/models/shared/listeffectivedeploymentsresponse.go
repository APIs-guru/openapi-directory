package shared

type ListEffectiveDeploymentsResponse struct {
	EffectiveDeployments []EffectiveDeployment `json:"effectiveDeployments"`
	NextToken            *string               `json:"nextToken"`
}
