package shared

type Ec2CopyRouteTableAction struct {
	Description  *string      `json:"Description"`
	RouteTableID ActionTarget `json:"RouteTableId"`
	VpcID        ActionTarget `json:"VpcId"`
}
