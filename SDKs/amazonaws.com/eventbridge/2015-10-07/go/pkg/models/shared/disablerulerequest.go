package shared

type DisableRuleRequest struct {
	EventBusName *string `json:"EventBusName,omitempty"`
	Name         string  `json:"Name"`
}
