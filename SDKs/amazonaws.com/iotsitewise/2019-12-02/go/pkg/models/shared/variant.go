package shared

type Variant struct {
	BooleanValue *bool    `json:"booleanValue,omitempty"`
	DoubleValue  *float64 `json:"doubleValue,omitempty"`
	IntegerValue *int64   `json:"integerValue,omitempty"`
	StringValue  *string  `json:"stringValue,omitempty"`
}
