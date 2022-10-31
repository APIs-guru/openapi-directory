package shared



type ListGroupsResponse struct {
    Groups []GroupInformation `json:"Groups,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

