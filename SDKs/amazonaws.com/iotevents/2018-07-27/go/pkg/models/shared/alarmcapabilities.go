package shared

type AlarmCapabilities struct {
	AcknowledgeFlow             *AcknowledgeFlow             `json:"acknowledgeFlow"`
	InitializationConfiguration *InitializationConfiguration `json:"initializationConfiguration"`
}
