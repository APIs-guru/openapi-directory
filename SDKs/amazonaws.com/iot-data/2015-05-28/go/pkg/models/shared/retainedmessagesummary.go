package shared

type RetainedMessageSummary struct {
	LastModifiedTime *int64  `json:"lastModifiedTime"`
	PayloadSize      *int64  `json:"payloadSize"`
	Qos              *int64  `json:"qos"`
	Topic            *string `json:"topic"`
}
