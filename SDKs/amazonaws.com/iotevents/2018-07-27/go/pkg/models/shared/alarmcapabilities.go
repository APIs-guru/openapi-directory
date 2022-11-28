package shared

// AlarmCapabilities
// Contains the configuration information of alarm state changes.
type AlarmCapabilities struct {
	AcknowledgeFlow             *AcknowledgeFlow             `json:"acknowledgeFlow,omitempty"`
	InitializationConfiguration *InitializationConfiguration `json:"initializationConfiguration,omitempty"`
}
