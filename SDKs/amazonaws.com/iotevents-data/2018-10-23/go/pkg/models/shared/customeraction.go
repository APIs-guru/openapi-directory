package shared

type CustomerAction struct {
	AcknowledgeActionConfiguration *AcknowledgeActionConfiguration `json:"acknowledgeActionConfiguration"`
	ActionName                     *CustomerActionNameEnum         `json:"actionName"`
	DisableActionConfiguration     *DisableActionConfiguration     `json:"disableActionConfiguration"`
	EnableActionConfiguration      *EnableActionConfiguration      `json:"enableActionConfiguration"`
	ResetActionConfiguration       *ResetActionConfiguration       `json:"resetActionConfiguration"`
	SnoozeActionConfiguration      *SnoozeActionConfiguration      `json:"snoozeActionConfiguration"`
}
