package shared

// LambdaEventSource
// Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
type LambdaEventSource struct {
	Topic string                    `json:"topic"`
	Type  LambdaEventSourceTypeEnum `json:"type"`
}
