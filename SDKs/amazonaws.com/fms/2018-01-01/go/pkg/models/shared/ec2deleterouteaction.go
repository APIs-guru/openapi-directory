package shared



type Ec2DeleteRouteAction struct {
    Description *string `json:"Description,omitempty"`
    DestinationCidrBlock *string `json:"DestinationCidrBlock,omitempty"`
    DestinationIpv6CidrBlock *string `json:"DestinationIpv6CidrBlock,omitempty"`
    DestinationPrefixListID *string `json:"DestinationPrefixListId,omitempty"`
    RouteTableID ActionTarget `json:"RouteTableId"`
    
}

