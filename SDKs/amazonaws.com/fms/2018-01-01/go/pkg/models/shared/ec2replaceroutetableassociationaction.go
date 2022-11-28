package shared

// Ec2ReplaceRouteTableAssociationAction
// Information about the ReplaceRouteTableAssociation action in Amazon EC2.
type Ec2ReplaceRouteTableAssociationAction struct {
	AssociationID ActionTarget `json:"AssociationId"`
	Description   *string      `json:"Description,omitempty"`
	RouteTableID  ActionTarget `json:"RouteTableId"`
}
