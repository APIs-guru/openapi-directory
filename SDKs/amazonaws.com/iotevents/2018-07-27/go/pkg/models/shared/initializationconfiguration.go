package shared

// InitializationConfiguration
// Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
type InitializationConfiguration struct {
	DisabledOnInitialization bool `json:"disabledOnInitialization"`
}
