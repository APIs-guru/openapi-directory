package shared

type ListOutgoingTypedLinksResponse struct {
	NextToken           *string              `json:"NextToken"`
	TypedLinkSpecifiers []TypedLinkSpecifier `json:"TypedLinkSpecifiers"`
}
