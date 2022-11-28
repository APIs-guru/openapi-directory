package shared

// TriggerProperties
// Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
type TriggerProperties struct {
	Scheduled *ScheduledTriggerProperties `json:"Scheduled,omitempty"`
}
