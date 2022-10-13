package shared

type DeleteRuleRequest struct {
	EventBusName *string `json:"EventBusName"`
	Force        *bool   `json:"Force"`
	Name         string  `json:"Name"`
}
