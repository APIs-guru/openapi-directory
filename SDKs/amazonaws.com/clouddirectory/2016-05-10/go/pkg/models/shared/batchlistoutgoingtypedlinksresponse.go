package shared

type BatchListOutgoingTypedLinksResponse struct {
	NextToken           *string              `json:"NextToken"`
	TypedLinkSpecifiers []TypedLinkSpecifier `json:"TypedLinkSpecifiers"`
}
