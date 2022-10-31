package shared



type SchemaChangePolicy struct {
    DeleteBehavior *DeleteBehaviorEnum `json:"DeleteBehavior,omitempty"`
    UpdateBehavior *UpdateBehaviorEnum `json:"UpdateBehavior,omitempty"`
    
}

