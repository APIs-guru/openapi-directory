package shared

type CustomerAction struct {
	AcknowledgeActionConfiguration *AcknowledgeActionConfiguration `json:"acknowledgeActionConfiguration,omitempty"`
	ActionName                     *CustomerActionNameEnum         `json:"actionName,omitempty"`
	DisableActionConfiguration     *DisableActionConfiguration     `json:"disableActionConfiguration,omitempty"`
	EnableActionConfiguration      *EnableActionConfiguration      `json:"enableActionConfiguration,omitempty"`
	ResetActionConfiguration       *ResetActionConfiguration       `json:"resetActionConfiguration,omitempty"`
	SnoozeActionConfiguration      *SnoozeActionConfiguration      `json:"snoozeActionConfiguration,omitempty"`
}
