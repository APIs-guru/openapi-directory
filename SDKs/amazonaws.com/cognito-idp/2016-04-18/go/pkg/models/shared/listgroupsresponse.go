package shared



type ListGroupsResponse struct {
    Groups []GroupType `json:"Groups,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

