package shared

type RetainedMessageSummary struct {
	LastModifiedTime *int64  `json:"lastModifiedTime,omitempty"`
	PayloadSize      *int64  `json:"payloadSize,omitempty"`
	Qos              *int64  `json:"qos,omitempty"`
	Topic            *string `json:"topic,omitempty"`
}
