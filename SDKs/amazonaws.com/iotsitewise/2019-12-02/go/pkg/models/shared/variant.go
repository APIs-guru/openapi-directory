package shared

type Variant struct {
	BooleanValue *bool    `json:"booleanValue"`
	DoubleValue  *float64 `json:"doubleValue"`
	IntegerValue *int64   `json:"integerValue"`
	StringValue  *string  `json:"stringValue"`
}
