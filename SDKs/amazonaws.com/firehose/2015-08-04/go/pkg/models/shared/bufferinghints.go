package shared

type BufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds"`
	SizeInMBs         *int64 `json:"SizeInMBs"`
}
