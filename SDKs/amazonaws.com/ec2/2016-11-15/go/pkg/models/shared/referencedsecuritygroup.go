package shared

// ReferencedSecurityGroup
//
//	Describes the security group that is referenced in the security group rule.
type ReferencedSecurityGroup struct {
	GroupID                *string
	PeeringStatus          *string
	UserID                 *string
	VpcID                  *string
	VpcPeeringConnectionID *string
}
