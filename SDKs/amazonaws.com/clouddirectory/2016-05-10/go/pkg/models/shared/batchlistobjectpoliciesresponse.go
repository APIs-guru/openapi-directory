package shared

type BatchListObjectPoliciesResponse struct {
	AttachedPolicyIds []string `json:"AttachedPolicyIds"`
	NextToken         *string  `json:"NextToken"`
}
