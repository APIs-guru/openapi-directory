package shared

type BatchListIncomingTypedLinksResponse struct {
	LinkSpecifiers []TypedLinkSpecifier `json:"LinkSpecifiers,omitempty"`
	NextToken      *string              `json:"NextToken,omitempty"`
}
