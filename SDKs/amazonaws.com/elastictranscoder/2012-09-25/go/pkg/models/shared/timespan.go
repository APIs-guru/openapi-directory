package shared

// TimeSpan
// Settings that determine when a clip begins and how long it lasts.
type TimeSpan struct {
	Duration  *string `json:"Duration,omitempty"`
	StartTime *string `json:"StartTime,omitempty"`
}
