package shared

// RouteTableAssociationState
// Describes the state of an association between a route table and a subnet or gateway.
type RouteTableAssociationState struct {
	State         *RouteTableAssociationStateCodeEnum
	StatusMessage *string
}
