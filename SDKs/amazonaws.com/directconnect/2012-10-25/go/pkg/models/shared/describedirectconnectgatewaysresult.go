package shared



type DescribeDirectConnectGatewaysResult struct {
    DirectConnectGateways []DirectConnectGateway `json:"directConnectGateways,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

