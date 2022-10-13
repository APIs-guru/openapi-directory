package shared

type Ec2ReplaceRouteTableAssociationAction struct {
	AssociationID ActionTarget `json:"AssociationId"`
	Description   *string      `json:"Description"`
	RouteTableID  ActionTarget `json:"RouteTableId"`
}
