package shared

type LambdaEventSource struct {
	Topic string                    `json:"topic"`
	Type  LambdaEventSourceTypeEnum `json:"type"`
}
