package shared

// IotEventsDestinationConfiguration
// Configuration information for delivery of dataset contents to IoT Events.
type IotEventsDestinationConfiguration struct {
	InputName string `json:"inputName"`
	RoleArn   string `json:"roleArn"`
}
