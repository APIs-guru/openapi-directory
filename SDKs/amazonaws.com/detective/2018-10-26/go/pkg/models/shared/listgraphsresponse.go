package shared



type ListGraphsResponse struct {
    GraphList []Graph `json:"GraphList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

