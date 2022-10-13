package shared

type LinkAttributeUpdate struct {
	AttributeAction *LinkAttributeAction `json:"AttributeAction"`
	AttributeKey    *AttributeKey        `json:"AttributeKey"`
}
