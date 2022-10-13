package shared

type ElasticsearchBufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds"`
	SizeInMBs         *int64 `json:"SizeInMBs"`
}
