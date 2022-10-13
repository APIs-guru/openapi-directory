package shared

type SnoozeActionConfiguration struct {
	Note           *string `json:"note"`
	SnoozeDuration *int64  `json:"snoozeDuration"`
}
