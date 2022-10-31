package shared

type BatchEnableAlarmResponse struct {
	ErrorEntries []BatchAlarmActionErrorEntry `json:"errorEntries,omitempty"`
}
