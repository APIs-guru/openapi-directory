package shared

// BatchLookupPolicyResponse
// Represents the output of a <a>LookupPolicy</a> response operation.
type BatchLookupPolicyResponse struct {
	NextToken        *string        `json:"NextToken,omitempty"`
	PolicyToPathList []PolicyToPath `json:"PolicyToPathList,omitempty"`
}
