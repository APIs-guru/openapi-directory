package shared



type BatchSnoozeAlarmResponse struct {
    ErrorEntries []BatchAlarmActionErrorEntry `json:"errorEntries,omitempty"`
    
}

