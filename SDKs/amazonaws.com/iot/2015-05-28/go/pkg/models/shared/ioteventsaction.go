package shared

type IotEventsAction struct {
	BatchMode *bool   `json:"batchMode"`
	InputName string  `json:"inputName"`
	MessageID *string `json:"messageId"`
	RoleArn   string  `json:"roleArn"`
}
