package shared

// HTTPEndpointRetryOptions
// Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
type HTTPEndpointRetryOptions struct {
	DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
}
