package shared



type ListGroupsRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    
}

