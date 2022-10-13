package shared

type ListObjectPoliciesResponse struct {
	AttachedPolicyIds []string `json:"AttachedPolicyIds"`
	NextToken         *string  `json:"NextToken"`
}
