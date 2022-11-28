package shared

// ElasticsearchRetryOptions
// Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.
type ElasticsearchRetryOptions struct {
	DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
}
