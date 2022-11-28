package shared

// HTTPEndpointBufferingHints
// Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
type HTTPEndpointBufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds,omitempty"`
	SizeInMBs         *int64 `json:"SizeInMBs,omitempty"`
}
