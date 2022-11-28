package shared

// GlobalReplicationGroupMember
// A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.
type GlobalReplicationGroupMember struct {
	AutomaticFailover      *AutomaticFailoverStatusEnum
	ReplicationGroupID     *string
	ReplicationGroupRegion *string
	Role                   *string
	Status                 *string
}
