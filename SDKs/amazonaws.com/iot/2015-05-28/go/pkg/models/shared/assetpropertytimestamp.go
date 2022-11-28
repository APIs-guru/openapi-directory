package shared

// AssetPropertyTimestamp
// An asset property timestamp entry containing the following information.
type AssetPropertyTimestamp struct {
	OffsetInNanos *string `json:"offsetInNanos,omitempty"`
	TimeInSeconds string  `json:"timeInSeconds"`
}
