package shared

type ReplicationGroupUpdate struct {
	Create *CreateReplicationGroupMemberAction `json:"Create"`
	Delete *DeleteReplicationGroupMemberAction `json:"Delete"`
	Update *UpdateReplicationGroupMemberAction `json:"Update"`
}
