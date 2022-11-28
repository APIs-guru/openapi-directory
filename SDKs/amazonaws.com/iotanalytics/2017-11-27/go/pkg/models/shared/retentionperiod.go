package shared

// RetentionPeriod
// How long, in days, message data is kept.
type RetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}
