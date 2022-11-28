package shared

// CacheSecurityGroupMembership
// Represents a cluster's status within a particular cache security group.
type CacheSecurityGroupMembership struct {
	CacheSecurityGroupName *string
	Status                 *string
}
