package shared

// SplunkRetryOptions
// Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
type SplunkRetryOptions struct {
	DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
}
