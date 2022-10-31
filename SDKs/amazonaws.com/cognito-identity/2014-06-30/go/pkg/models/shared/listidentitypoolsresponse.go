package shared



type ListIdentityPoolsResponse struct {
    IdentityPools []IdentityPoolShortDescription `json:"IdentityPools,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

