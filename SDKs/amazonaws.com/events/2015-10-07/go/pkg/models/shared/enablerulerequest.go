package shared

type EnableRuleRequest struct {
	EventBusName *string `json:"EventBusName,omitempty"`
	Name         string  `json:"Name"`
}
