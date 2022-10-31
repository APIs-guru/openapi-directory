package shared



type ListOutgoingTypedLinksResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TypedLinkSpecifiers []TypedLinkSpecifier `json:"TypedLinkSpecifiers,omitempty"`
    
}

