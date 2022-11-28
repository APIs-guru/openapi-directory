package shared

// RetryOptions
//
//	The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
type RetryOptions struct {
	DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
}
