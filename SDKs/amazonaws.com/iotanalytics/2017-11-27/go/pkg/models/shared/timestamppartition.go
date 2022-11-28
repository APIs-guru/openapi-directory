package shared

// TimestampPartition
//
//	A partition dimension defined by a timestamp attribute.
type TimestampPartition struct {
	AttributeName   string  `json:"attributeName"`
	TimestampFormat *string `json:"timestampFormat,omitempty"`
}
