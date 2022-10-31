package shared



type BatchListOutgoingTypedLinksResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TypedLinkSpecifiers []TypedLinkSpecifier `json:"TypedLinkSpecifiers,omitempty"`
    
}

