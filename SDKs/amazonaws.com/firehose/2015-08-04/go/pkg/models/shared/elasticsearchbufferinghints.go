package shared



type ElasticsearchBufferingHints struct {
    IntervalInSeconds *int64 `json:"IntervalInSeconds,omitempty"`
    SizeInMBs *int64 `json:"SizeInMBs,omitempty"`
    
}

