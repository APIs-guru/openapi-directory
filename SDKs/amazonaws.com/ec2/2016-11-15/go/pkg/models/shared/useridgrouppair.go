package shared

// UserIDGroupPair
// Describes a security group and Amazon Web Services account ID pair.
type UserIDGroupPair struct {
	Description            *string
	GroupID                *string
	GroupName              *string
	PeeringStatus          *string
	UserID                 *string
	VpcID                  *string
	VpcPeeringConnectionID *string
}
