package shared

// BatchListOutgoingTypedLinksResponse
// Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
type BatchListOutgoingTypedLinksResponse struct {
	NextToken           *string              `json:"NextToken,omitempty"`
	TypedLinkSpecifiers []TypedLinkSpecifier `json:"TypedLinkSpecifiers,omitempty"`
}
