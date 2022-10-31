package shared

import (
"time")

type TypedAttributeValue struct {
    BinaryValue *string `json:"BinaryValue,omitempty"`
    BooleanValue *bool `json:"BooleanValue,omitempty"`
    DatetimeValue *time.Time `json:"DatetimeValue,omitempty"`
    NumberValue *string `json:"NumberValue,omitempty"`
    StringValue *string `json:"StringValue,omitempty"`
    
}

