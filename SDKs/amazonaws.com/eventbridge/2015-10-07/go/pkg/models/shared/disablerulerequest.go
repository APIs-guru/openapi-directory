package shared

type DisableRuleRequest struct {
	EventBusName *string `json:"EventBusName"`
	Name         string  `json:"Name"`
}
