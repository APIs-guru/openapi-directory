package shared

// ReplicationGroupUpdate
// <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul>
type ReplicationGroupUpdate struct {
	Create *CreateReplicationGroupMemberAction `json:"Create,omitempty"`
	Delete *DeleteReplicationGroupMemberAction `json:"Delete,omitempty"`
	Update *UpdateReplicationGroupMemberAction `json:"Update,omitempty"`
}
