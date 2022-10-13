package shared

type TimestampPartition struct {
	AttributeName   string  `json:"attributeName"`
	TimestampFormat *string `json:"timestampFormat"`
}
