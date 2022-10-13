package shared

type ListIncomingTypedLinksResponse struct {
	LinkSpecifiers []TypedLinkSpecifier `json:"LinkSpecifiers"`
	NextToken      *string              `json:"NextToken"`
}
