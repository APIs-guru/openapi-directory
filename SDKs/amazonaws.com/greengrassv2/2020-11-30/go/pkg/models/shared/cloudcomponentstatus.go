package shared

type CloudComponentStatus struct {
	ComponentState *CloudComponentStateEnum `json:"componentState,omitempty"`
	Errors         map[string]string        `json:"errors,omitempty"`
	Message        *string                  `json:"message,omitempty"`
}
