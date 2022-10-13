package shared

type GetDeploymentsResponse struct {
	Items     []Deployment `json:"Items"`
	NextToken *string      `json:"NextToken"`
}
