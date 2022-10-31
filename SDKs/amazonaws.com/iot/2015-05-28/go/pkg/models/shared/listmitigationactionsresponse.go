package shared



type ListMitigationActionsResponse struct {
    ActionIdentifiers []MitigationActionIdentifier `json:"actionIdentifiers,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

