package shared

type TimeInNanos struct {
	OffsetInNanos *int64 `json:"offsetInNanos"`
	TimeInSeconds int64  `json:"timeInSeconds"`
}
