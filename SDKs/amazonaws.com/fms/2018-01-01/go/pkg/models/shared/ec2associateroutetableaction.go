package shared



type Ec2AssociateRouteTableAction struct {
    Description *string `json:"Description,omitempty"`
    GatewayID *ActionTarget `json:"GatewayId,omitempty"`
    RouteTableID ActionTarget `json:"RouteTableId"`
    SubnetID *ActionTarget `json:"SubnetId,omitempty"`
    
}

