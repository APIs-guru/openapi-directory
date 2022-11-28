package shared

// ObjectAttributeUpdate
// Structure that contains attribute update information.
type ObjectAttributeUpdate struct {
	ObjectAttributeAction *ObjectAttributeAction `json:"ObjectAttributeAction,omitempty"`
	ObjectAttributeKey    *AttributeKey          `json:"ObjectAttributeKey,omitempty"`
}
