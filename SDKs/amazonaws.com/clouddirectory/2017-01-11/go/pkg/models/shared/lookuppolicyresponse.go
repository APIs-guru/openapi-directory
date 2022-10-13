package shared

type LookupPolicyResponse struct {
	NextToken        *string        `json:"NextToken"`
	PolicyToPathList []PolicyToPath `json:"PolicyToPathList"`
}
