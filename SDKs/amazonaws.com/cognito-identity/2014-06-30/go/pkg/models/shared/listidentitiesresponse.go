package shared



type ListIdentitiesResponse struct {
    Identities []IdentityDescription `json:"Identities,omitempty"`
    IdentityPoolID *string `json:"IdentityPoolId,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

