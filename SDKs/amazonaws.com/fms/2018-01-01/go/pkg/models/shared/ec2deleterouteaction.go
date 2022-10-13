package shared

type Ec2DeleteRouteAction struct {
	Description              *string      `json:"Description"`
	DestinationCidrBlock     *string      `json:"DestinationCidrBlock"`
	DestinationIpv6CidrBlock *string      `json:"DestinationIpv6CidrBlock"`
	DestinationPrefixListID  *string      `json:"DestinationPrefixListId"`
	RouteTableID             ActionTarget `json:"RouteTableId"`
}
