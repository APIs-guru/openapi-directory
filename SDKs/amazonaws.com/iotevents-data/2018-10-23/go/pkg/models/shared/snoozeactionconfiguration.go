package shared



type SnoozeActionConfiguration struct {
    Note *string `json:"note,omitempty"`
    SnoozeDuration *int64 `json:"snoozeDuration,omitempty"`
    
}

