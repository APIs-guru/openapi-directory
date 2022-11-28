package shared

// GetRetainedMessageResponse
// The output from the GetRetainedMessage operation.
type GetRetainedMessageResponse struct {
	LastModifiedTime *int64  `json:"lastModifiedTime,omitempty"`
	Payload          *string `json:"payload,omitempty"`
	Qos              *int64  `json:"qos,omitempty"`
	Topic            *string `json:"topic,omitempty"`
}
