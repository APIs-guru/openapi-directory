package shared

type BatchLookupPolicyResponse struct {
	NextToken        *string        `json:"NextToken"`
	PolicyToPathList []PolicyToPath `json:"PolicyToPathList"`
}
