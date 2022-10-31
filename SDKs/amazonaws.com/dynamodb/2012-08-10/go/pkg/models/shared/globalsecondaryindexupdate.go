package shared



type GlobalSecondaryIndexUpdate struct {
    Create *CreateGlobalSecondaryIndexAction `json:"Create,omitempty"`
    Delete *DeleteGlobalSecondaryIndexAction `json:"Delete,omitempty"`
    Update *UpdateGlobalSecondaryIndexAction `json:"Update,omitempty"`
    
}

