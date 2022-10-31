package shared



type HTTPEndpointBufferingHints struct {
    IntervalInSeconds *int64 `json:"IntervalInSeconds,omitempty"`
    SizeInMBs *int64 `json:"SizeInMBs,omitempty"`
    
}

