package shared

type BatchDisableAlarmResponse struct {
	ErrorEntries []BatchAlarmActionErrorEntry `json:"errorEntries"`
}
