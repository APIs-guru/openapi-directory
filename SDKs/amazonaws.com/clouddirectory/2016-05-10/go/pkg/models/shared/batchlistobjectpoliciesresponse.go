package shared

type BatchListObjectPoliciesResponse struct {
	AttachedPolicyIds []string `json:"AttachedPolicyIds,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
