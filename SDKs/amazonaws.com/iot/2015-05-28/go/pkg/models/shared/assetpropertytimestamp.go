package shared

type AssetPropertyTimestamp struct {
	OffsetInNanos *string `json:"offsetInNanos,omitempty"`
	TimeInSeconds string  `json:"timeInSeconds"`
}
