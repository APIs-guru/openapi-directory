package shared

// Ec2AssociateRouteTableAction
// The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
type Ec2AssociateRouteTableAction struct {
	Description  *string       `json:"Description,omitempty"`
	GatewayID    *ActionTarget `json:"GatewayId,omitempty"`
	RouteTableID ActionTarget  `json:"RouteTableId"`
	SubnetID     *ActionTarget `json:"SubnetId,omitempty"`
}
