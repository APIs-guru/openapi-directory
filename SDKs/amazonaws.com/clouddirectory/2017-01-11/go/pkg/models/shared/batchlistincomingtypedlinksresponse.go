package shared

// BatchListIncomingTypedLinksResponse
// Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
type BatchListIncomingTypedLinksResponse struct {
	LinkSpecifiers []TypedLinkSpecifier `json:"LinkSpecifiers,omitempty"`
	NextToken      *string              `json:"NextToken,omitempty"`
}
