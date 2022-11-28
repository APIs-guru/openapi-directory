package shared

// EntitlementValue
// The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
type EntitlementValue struct {
	BooleanValue *bool    `json:"BooleanValue,omitempty"`
	DoubleValue  *float64 `json:"DoubleValue,omitempty"`
	IntegerValue *int64   `json:"IntegerValue,omitempty"`
	StringValue  *string  `json:"StringValue,omitempty"`
}
