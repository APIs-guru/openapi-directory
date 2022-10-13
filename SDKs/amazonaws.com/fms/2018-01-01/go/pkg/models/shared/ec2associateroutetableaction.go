package shared

type Ec2AssociateRouteTableAction struct {
	Description  *string       `json:"Description"`
	GatewayID    *ActionTarget `json:"GatewayId"`
	RouteTableID ActionTarget  `json:"RouteTableId"`
	SubnetID     *ActionTarget `json:"SubnetId"`
}
