package shared

// IotEventsAction
// Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
type IotEventsAction struct {
	InputName string   `json:"inputName"`
	Payload   *Payload `json:"payload,omitempty"`
}
