package shared

// LinkAttributeUpdate
// Structure that contains attribute update information.
type LinkAttributeUpdate struct {
	AttributeAction *LinkAttributeAction `json:"AttributeAction,omitempty"`
	AttributeKey    *AttributeKey        `json:"AttributeKey,omitempty"`
}
