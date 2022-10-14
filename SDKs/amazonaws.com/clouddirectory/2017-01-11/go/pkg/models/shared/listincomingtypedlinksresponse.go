package shared

type ListIncomingTypedLinksResponse struct {
	LinkSpecifiers []TypedLinkSpecifier `json:"LinkSpecifiers,omitempty"`
	NextToken      *string              `json:"NextToken,omitempty"`
}
