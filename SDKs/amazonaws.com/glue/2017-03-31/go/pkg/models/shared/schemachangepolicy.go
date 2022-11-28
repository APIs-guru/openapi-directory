package shared

// SchemaChangePolicy
// A policy that specifies update and deletion behaviors for the crawler.
type SchemaChangePolicy struct {
	DeleteBehavior *DeleteBehaviorEnum `json:"DeleteBehavior,omitempty"`
	UpdateBehavior *UpdateBehaviorEnum `json:"UpdateBehavior,omitempty"`
}
