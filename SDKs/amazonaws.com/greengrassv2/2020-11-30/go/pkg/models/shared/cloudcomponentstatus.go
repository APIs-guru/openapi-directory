package shared

// CloudComponentStatus
// Contains the status of a component in the IoT Greengrass service.
type CloudComponentStatus struct {
	ComponentState *CloudComponentStateEnum `json:"componentState,omitempty"`
	Errors         map[string]string        `json:"errors,omitempty"`
	Message        *string                  `json:"message,omitempty"`
}
