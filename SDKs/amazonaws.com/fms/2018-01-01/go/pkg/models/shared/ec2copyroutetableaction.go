package shared

type Ec2CopyRouteTableAction struct {
	Description  *string      `json:"Description,omitempty"`
	RouteTableID ActionTarget `json:"RouteTableId"`
	VpcID        ActionTarget `json:"VpcId"`
}
