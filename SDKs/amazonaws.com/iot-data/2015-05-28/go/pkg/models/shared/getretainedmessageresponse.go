package shared

type GetRetainedMessageResponse struct {
	LastModifiedTime *int64  `json:"lastModifiedTime,omitempty"`
	Payload          *string `json:"payload,omitempty"`
	Qos              *int64  `json:"qos,omitempty"`
	Topic            *string `json:"topic,omitempty"`
}
