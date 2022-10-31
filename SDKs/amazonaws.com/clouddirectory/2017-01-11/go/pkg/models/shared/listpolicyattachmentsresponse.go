package shared



type ListPolicyAttachmentsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ObjectIdentifiers []string `json:"ObjectIdentifiers,omitempty"`
    
}

