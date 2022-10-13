package shared

import (
	"time"
)

type TypedAttributeValue struct {
	BinaryValue   *string    `json:"BinaryValue"`
	BooleanValue  *bool      `json:"BooleanValue"`
	DatetimeValue *time.Time `json:"DatetimeValue"`
	NumberValue   *string    `json:"NumberValue"`
	StringValue   *string    `json:"StringValue"`
}
