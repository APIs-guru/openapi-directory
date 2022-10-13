package shared

type ListObjectParentsResponse struct {
	NextToken   *string                            `json:"NextToken"`
	ParentLinks []ObjectIdentifierAndLinkNameTuple `json:"ParentLinks"`
	Parents     map[string]string                  `json:"Parents"`
}
