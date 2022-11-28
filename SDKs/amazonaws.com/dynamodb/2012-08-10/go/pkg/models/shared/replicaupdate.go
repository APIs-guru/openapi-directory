package shared

// ReplicaUpdate
// <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
type ReplicaUpdate struct {
	Create *CreateReplicaAction `json:"Create,omitempty"`
	Delete *DeleteReplicaAction `json:"Delete,omitempty"`
}
