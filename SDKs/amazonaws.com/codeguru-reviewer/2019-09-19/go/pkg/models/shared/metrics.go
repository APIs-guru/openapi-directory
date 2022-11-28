package shared

// Metrics
//
//	Information about the statistics from the code review.
type Metrics struct {
	FindingsCount           *int64 `json:"FindingsCount,omitempty"`
	MeteredLinesOfCodeCount *int64 `json:"MeteredLinesOfCodeCount,omitempty"`
}
