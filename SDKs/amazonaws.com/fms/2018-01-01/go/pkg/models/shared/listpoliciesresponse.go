package shared

type ListPoliciesResponse struct {
	NextToken  *string         `json:"NextToken"`
	PolicyList []PolicySummary `json:"PolicyList"`
}
