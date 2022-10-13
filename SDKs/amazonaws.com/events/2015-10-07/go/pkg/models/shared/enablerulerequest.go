package shared

type EnableRuleRequest struct {
	EventBusName *string `json:"EventBusName"`
	Name         string  `json:"Name"`
}
