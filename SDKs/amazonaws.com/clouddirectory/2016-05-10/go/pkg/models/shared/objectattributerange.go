package shared

type ObjectAttributeRange struct {
	AttributeKey *AttributeKey             `json:"AttributeKey"`
	Range        *TypedAttributeValueRange `json:"Range"`
}
