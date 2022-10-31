package shared



type ListConnectionsResponse struct {
    Connections []Connection `json:"Connections,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

