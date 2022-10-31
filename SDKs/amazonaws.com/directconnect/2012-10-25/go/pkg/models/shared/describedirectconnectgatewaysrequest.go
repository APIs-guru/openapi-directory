package shared



type DescribeDirectConnectGatewaysRequest struct {
    DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

