package shared

// StateChangeConfiguration
// Contains the configuration information of alarm state changes.
type StateChangeConfiguration struct {
	TriggerType *TriggerTypeEnum `json:"triggerType,omitempty"`
}
