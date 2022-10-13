package shared

type Ec2ReplaceRouteAction struct {
	Description              *string       `json:"Description"`
	DestinationCidrBlock     *string       `json:"DestinationCidrBlock"`
	DestinationIpv6CidrBlock *string       `json:"DestinationIpv6CidrBlock"`
	DestinationPrefixListID  *string       `json:"DestinationPrefixListId"`
	GatewayID                *ActionTarget `json:"GatewayId"`
	RouteTableID             ActionTarget  `json:"RouteTableId"`
}
