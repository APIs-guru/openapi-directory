package shared

// ListPolicyVersionsResponse
// The output from the ListPolicyVersions operation.
type ListPolicyVersionsResponse struct {
	PolicyVersions []PolicyVersion `json:"policyVersions,omitempty"`
}
