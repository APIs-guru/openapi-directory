package shared

// IotEventsAction
// Sends an input to an IoT Events detector.
type IotEventsAction struct {
	BatchMode *bool   `json:"batchMode,omitempty"`
	InputName string  `json:"inputName"`
	MessageID *string `json:"messageId,omitempty"`
	RoleArn   string  `json:"roleArn"`
}
