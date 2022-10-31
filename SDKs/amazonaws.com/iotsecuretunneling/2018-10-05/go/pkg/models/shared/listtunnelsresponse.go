package shared



type ListTunnelsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    TunnelSummaries []TunnelSummary `json:"tunnelSummaries,omitempty"`
    
}

