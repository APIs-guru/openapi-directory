package shared

type ObjectAttributeUpdate struct {
	ObjectAttributeAction *ObjectAttributeAction `json:"ObjectAttributeAction,omitempty"`
	ObjectAttributeKey    *AttributeKey          `json:"ObjectAttributeKey,omitempty"`
}
