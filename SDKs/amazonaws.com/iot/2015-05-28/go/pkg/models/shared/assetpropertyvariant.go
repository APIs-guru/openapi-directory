package shared

// AssetPropertyVariant
// Contains an asset property value (of a single type).
type AssetPropertyVariant struct {
	BooleanValue *string `json:"booleanValue,omitempty"`
	DoubleValue  *string `json:"doubleValue,omitempty"`
	IntegerValue *string `json:"integerValue,omitempty"`
	StringValue  *string `json:"stringValue,omitempty"`
}
