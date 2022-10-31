package shared

type ReplicationGroupUpdate struct {
	Create *CreateReplicationGroupMemberAction `json:"Create,omitempty"`
	Delete *DeleteReplicationGroupMemberAction `json:"Delete,omitempty"`
	Update *UpdateReplicationGroupMemberAction `json:"Update,omitempty"`
}
