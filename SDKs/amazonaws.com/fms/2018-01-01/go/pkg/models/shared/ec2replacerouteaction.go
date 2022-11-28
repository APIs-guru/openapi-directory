package shared

// Ec2ReplaceRouteAction
// Information about the ReplaceRoute action in Amazon EC2.
type Ec2ReplaceRouteAction struct {
	Description              *string       `json:"Description,omitempty"`
	DestinationCidrBlock     *string       `json:"DestinationCidrBlock,omitempty"`
	DestinationIpv6CidrBlock *string       `json:"DestinationIpv6CidrBlock,omitempty"`
	DestinationPrefixListID  *string       `json:"DestinationPrefixListId,omitempty"`
	GatewayID                *ActionTarget `json:"GatewayId,omitempty"`
	RouteTableID             ActionTarget  `json:"RouteTableId"`
}
