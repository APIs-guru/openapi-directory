package shared

// RouteTable
// Describes a route table.
type RouteTable struct {
	Associations    []RouteTableAssociation
	OwnerID         *string
	PropagatingVgws []PropagatingVgw
	RouteTableID    *string
	Routes          []Route
	Tags            []Tag
	VpcID           *string
}
