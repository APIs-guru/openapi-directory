package shared

// AttributeKeyAndValue
// The combination of an attribute key and an attribute value.
type AttributeKeyAndValue struct {
	Key   AttributeKey        `json:"Key"`
	Value TypedAttributeValue `json:"Value"`
}
