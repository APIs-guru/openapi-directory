package shared

// SnoozeActionConfiguration
// Contains the configuration information of a snooze action.
type SnoozeActionConfiguration struct {
	Note           *string `json:"note,omitempty"`
	SnoozeDuration *int64  `json:"snoozeDuration,omitempty"`
}
