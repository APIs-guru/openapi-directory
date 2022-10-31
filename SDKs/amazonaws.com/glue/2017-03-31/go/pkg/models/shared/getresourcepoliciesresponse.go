package shared



type GetResourcePoliciesResponse struct {
    GetResourcePoliciesResponseList []GluePolicy `json:"GetResourcePoliciesResponseList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

