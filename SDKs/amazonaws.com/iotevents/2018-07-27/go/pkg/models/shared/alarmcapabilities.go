package shared

type AlarmCapabilities struct {
	AcknowledgeFlow             *AcknowledgeFlow             `json:"acknowledgeFlow,omitempty"`
	InitializationConfiguration *InitializationConfiguration `json:"initializationConfiguration,omitempty"`
}
