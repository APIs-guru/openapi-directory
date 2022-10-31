package shared

type ListPoliciesResponse struct {
	NextToken  *string         `json:"NextToken,omitempty"`
	PolicyList []PolicySummary `json:"PolicyList,omitempty"`
}
