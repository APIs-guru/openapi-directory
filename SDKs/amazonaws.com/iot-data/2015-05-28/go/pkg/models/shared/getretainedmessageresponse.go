package shared

type GetRetainedMessageResponse struct {
	LastModifiedTime *int64  `json:"lastModifiedTime"`
	Payload          *string `json:"payload"`
	Qos              *int64  `json:"qos"`
	Topic            *string `json:"topic"`
}
