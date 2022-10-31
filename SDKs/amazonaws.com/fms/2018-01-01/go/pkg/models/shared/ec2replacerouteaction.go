package shared



type Ec2ReplaceRouteAction struct {
    Description *string `json:"Description,omitempty"`
    DestinationCidrBlock *string `json:"DestinationCidrBlock,omitempty"`
    DestinationIpv6CidrBlock *string `json:"DestinationIpv6CidrBlock,omitempty"`
    DestinationPrefixListID *string `json:"DestinationPrefixListId,omitempty"`
    GatewayID *ActionTarget `json:"GatewayId,omitempty"`
    RouteTableID ActionTarget `json:"RouteTableId"`
    
}

