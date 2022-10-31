package shared



type ListGatewaysResponse struct {
    GatewaySummaries []GatewaySummary `json:"gatewaySummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

