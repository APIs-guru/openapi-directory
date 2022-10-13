package shared

type ReplicaUpdate struct {
	Create *CreateReplicaAction `json:"Create"`
	Delete *DeleteReplicaAction `json:"Delete"`
}
