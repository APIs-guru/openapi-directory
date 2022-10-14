package shared

type BatchLookupPolicyResponse struct {
	NextToken        *string        `json:"NextToken,omitempty"`
	PolicyToPathList []PolicyToPath `json:"PolicyToPathList,omitempty"`
}
