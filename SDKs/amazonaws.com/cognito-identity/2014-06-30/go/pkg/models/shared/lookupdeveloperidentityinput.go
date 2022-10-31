package shared



type LookupDeveloperIdentityInput struct {
    DeveloperUserIdentifier *string `json:"DeveloperUserIdentifier,omitempty"`
    IdentityID *string `json:"IdentityId,omitempty"`
    IdentityPoolID string `json:"IdentityPoolId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

