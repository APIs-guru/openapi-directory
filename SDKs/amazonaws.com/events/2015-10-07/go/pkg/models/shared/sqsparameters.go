package shared

// SqsParameters
// This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
type SqsParameters struct {
	MessageGroupID *string `json:"MessageGroupId,omitempty"`
}
