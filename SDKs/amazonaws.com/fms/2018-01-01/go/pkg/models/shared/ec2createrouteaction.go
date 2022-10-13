package shared

type Ec2CreateRouteAction struct {
	Description              *string       `json:"Description"`
	DestinationCidrBlock     *string       `json:"DestinationCidrBlock"`
	DestinationIpv6CidrBlock *string       `json:"DestinationIpv6CidrBlock"`
	DestinationPrefixListID  *string       `json:"DestinationPrefixListId"`
	GatewayID                *ActionTarget `json:"GatewayId"`
	RouteTableID             ActionTarget  `json:"RouteTableId"`
	VpcEndpointID            *ActionTarget `json:"VpcEndpointId"`
}
