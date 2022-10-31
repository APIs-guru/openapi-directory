package shared



type ListGroupsResponse struct {
    Groups []Group `json:"Groups"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

