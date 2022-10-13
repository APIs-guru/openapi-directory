package shared

type CloudComponentStatus struct {
	ComponentState *CloudComponentStateEnum `json:"componentState"`
	Errors         map[string]string        `json:"errors"`
	Message        *string                  `json:"message"`
}
