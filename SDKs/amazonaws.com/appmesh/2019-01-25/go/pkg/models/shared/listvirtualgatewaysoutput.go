package shared

type ListVirtualGatewaysOutput struct {
	NextToken       *string             `json:"nextToken"`
	VirtualGateways []VirtualGatewayRef `json:"virtualGateways"`
}
