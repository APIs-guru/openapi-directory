package shared



type BatchResetAlarmResponse struct {
    ErrorEntries []BatchAlarmActionErrorEntry `json:"errorEntries,omitempty"`
    
}

