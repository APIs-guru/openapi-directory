package shared

type EntitlementValue struct {
	BooleanValue *bool    `json:"BooleanValue"`
	DoubleValue  *float64 `json:"DoubleValue"`
	IntegerValue *int64   `json:"IntegerValue"`
	StringValue  *string  `json:"StringValue"`
}
