package shared

type TimeInNanos struct {
	OffsetInNanos *int64 `json:"offsetInNanos,omitempty"`
	TimeInSeconds int64  `json:"timeInSeconds"`
}
