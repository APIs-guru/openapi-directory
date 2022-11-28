package shared

// RouteTableAssociation
// Describes an association between a route table and a subnet or gateway.
type RouteTableAssociation struct {
	AssociationState        *RouteTableAssociationState
	GatewayID               *string
	Main                    *bool
	RouteTableAssociationID *string
	RouteTableID            *string
	SubnetID                *string
}
