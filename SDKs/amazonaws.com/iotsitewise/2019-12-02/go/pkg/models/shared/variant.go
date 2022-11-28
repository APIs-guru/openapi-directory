package shared

// Variant
// Contains an asset property value (of a single type only).
type Variant struct {
	BooleanValue *bool    `json:"booleanValue,omitempty"`
	DoubleValue  *float64 `json:"doubleValue,omitempty"`
	IntegerValue *int64   `json:"integerValue,omitempty"`
	StringValue  *string  `json:"stringValue,omitempty"`
}
