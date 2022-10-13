package shared

type SchemaChangePolicy struct {
	DeleteBehavior *DeleteBehaviorEnum `json:"DeleteBehavior"`
	UpdateBehavior *UpdateBehaviorEnum `json:"UpdateBehavior"`
}
