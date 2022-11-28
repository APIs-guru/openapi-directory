package shared

// TimeInNanos
// Contains a timestamp with optional nanosecond granularity.
type TimeInNanos struct {
	OffsetInNanos *int64 `json:"offsetInNanos,omitempty"`
	TimeInSeconds int64  `json:"timeInSeconds"`
}
