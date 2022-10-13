package shared

type BatchListObjectParentsResponse struct {
	NextToken   *string                            `json:"NextToken"`
	ParentLinks []ObjectIdentifierAndLinkNameTuple `json:"ParentLinks"`
}
