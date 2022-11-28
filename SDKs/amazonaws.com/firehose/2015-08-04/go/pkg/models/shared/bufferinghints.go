package shared

// BufferingHints
// Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
type BufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds,omitempty"`
	SizeInMBs         *int64 `json:"SizeInMBs,omitempty"`
}
