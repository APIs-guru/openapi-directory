package shared



type BatchAcknowledgeAlarmResponse struct {
    ErrorEntries []BatchAlarmActionErrorEntry `json:"errorEntries,omitempty"`
    
}

