package shared

type ListVirtualGatewaysOutput struct {
	NextToken       *string             `json:"nextToken,omitempty"`
	VirtualGateways []VirtualGatewayRef `json:"virtualGateways"`
}
