package shared

import (
	"time"
)

// TypedAttributeValue
// Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
type TypedAttributeValue struct {
	BinaryValue   *string    `json:"BinaryValue,omitempty"`
	BooleanValue  *bool      `json:"BooleanValue,omitempty"`
	DatetimeValue *time.Time `json:"DatetimeValue,omitempty"`
	NumberValue   *string    `json:"NumberValue,omitempty"`
	StringValue   *string    `json:"StringValue,omitempty"`
}
