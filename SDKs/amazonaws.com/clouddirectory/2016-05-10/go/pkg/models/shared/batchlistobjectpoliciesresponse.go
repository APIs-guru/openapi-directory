package shared

// BatchListObjectPoliciesResponse
// Represents the output of a <a>ListObjectPolicies</a> response operation.
type BatchListObjectPoliciesResponse struct {
	AttachedPolicyIds []string `json:"AttachedPolicyIds,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
