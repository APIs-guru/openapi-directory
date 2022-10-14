package shared

type EntitlementValue struct {
	BooleanValue *bool    `json:"BooleanValue,omitempty"`
	DoubleValue  *float64 `json:"DoubleValue,omitempty"`
	IntegerValue *int64   `json:"IntegerValue,omitempty"`
	StringValue  *string  `json:"StringValue,omitempty"`
}
