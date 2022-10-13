package shared

type GetResourcePoliciesResponse struct {
	GetResourcePoliciesResponseList []GluePolicy `json:"GetResourcePoliciesResponseList"`
	NextToken                       *string      `json:"NextToken"`
}
