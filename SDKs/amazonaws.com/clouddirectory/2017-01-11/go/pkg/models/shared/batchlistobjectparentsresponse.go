package shared

type BatchListObjectParentsResponse struct {
	NextToken   *string                            `json:"NextToken,omitempty"`
	ParentLinks []ObjectIdentifierAndLinkNameTuple `json:"ParentLinks,omitempty"`
}
