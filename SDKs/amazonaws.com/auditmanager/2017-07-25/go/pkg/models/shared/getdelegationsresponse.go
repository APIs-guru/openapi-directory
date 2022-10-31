package shared



type GetDelegationsResponse struct {
    Delegations []DelegationMetadata `json:"delegations,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

