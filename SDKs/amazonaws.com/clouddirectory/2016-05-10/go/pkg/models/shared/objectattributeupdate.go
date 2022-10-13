package shared

type ObjectAttributeUpdate struct {
	ObjectAttributeAction *ObjectAttributeAction `json:"ObjectAttributeAction"`
	ObjectAttributeKey    *AttributeKey          `json:"ObjectAttributeKey"`
}
