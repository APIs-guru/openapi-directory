package shared

// Ec2CreateRouteAction
// Information about the CreateRoute action in Amazon EC2.
type Ec2CreateRouteAction struct {
	Description              *string       `json:"Description,omitempty"`
	DestinationCidrBlock     *string       `json:"DestinationCidrBlock,omitempty"`
	DestinationIpv6CidrBlock *string       `json:"DestinationIpv6CidrBlock,omitempty"`
	DestinationPrefixListID  *string       `json:"DestinationPrefixListId,omitempty"`
	GatewayID                *ActionTarget `json:"GatewayId,omitempty"`
	RouteTableID             ActionTarget  `json:"RouteTableId"`
	VpcEndpointID            *ActionTarget `json:"VpcEndpointId,omitempty"`
}
