package shared

type LookupPolicyResponse struct {
	NextToken        *string        `json:"NextToken,omitempty"`
	PolicyToPathList []PolicyToPath `json:"PolicyToPathList,omitempty"`
}
