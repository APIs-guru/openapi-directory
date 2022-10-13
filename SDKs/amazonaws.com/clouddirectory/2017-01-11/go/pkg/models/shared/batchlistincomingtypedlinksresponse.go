package shared

type BatchListIncomingTypedLinksResponse struct {
	LinkSpecifiers []TypedLinkSpecifier `json:"LinkSpecifiers"`
	NextToken      *string              `json:"NextToken"`
}
