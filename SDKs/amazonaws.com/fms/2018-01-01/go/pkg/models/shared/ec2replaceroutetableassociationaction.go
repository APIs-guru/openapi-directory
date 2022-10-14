package shared

type Ec2ReplaceRouteTableAssociationAction struct {
	AssociationID ActionTarget `json:"AssociationId"`
	Description   *string      `json:"Description,omitempty"`
	RouteTableID  ActionTarget `json:"RouteTableId"`
}
