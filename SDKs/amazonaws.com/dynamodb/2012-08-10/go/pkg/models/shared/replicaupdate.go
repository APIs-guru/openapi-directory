package shared



type ReplicaUpdate struct {
    Create *CreateReplicaAction `json:"Create,omitempty"`
    Delete *DeleteReplicaAction `json:"Delete,omitempty"`
    
}

