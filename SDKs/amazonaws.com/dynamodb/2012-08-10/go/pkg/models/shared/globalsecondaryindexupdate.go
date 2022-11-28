package shared

// GlobalSecondaryIndexUpdate
// <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
type GlobalSecondaryIndexUpdate struct {
	Create *CreateGlobalSecondaryIndexAction `json:"Create,omitempty"`
	Delete *DeleteGlobalSecondaryIndexAction `json:"Delete,omitempty"`
	Update *UpdateGlobalSecondaryIndexAction `json:"Update,omitempty"`
}
