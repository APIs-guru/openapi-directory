package shared

type HTTPEndpointBufferingHints struct {
	IntervalInSeconds *int64 `json:"IntervalInSeconds"`
	SizeInMBs         *int64 `json:"SizeInMBs"`
}
