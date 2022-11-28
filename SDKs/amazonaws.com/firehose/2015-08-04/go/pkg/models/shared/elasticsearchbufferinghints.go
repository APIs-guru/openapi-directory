package shared

// ElasticsearchBufferingHints
// Describes the buffering to perform before delivering data to the Amazon ES destination.
type ElasticsearchBufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds,omitempty"`
	SizeInMBs         *int64 `json:"SizeInMBs,omitempty"`
}
