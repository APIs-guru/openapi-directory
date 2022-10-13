package shared

type DescribeRuleRequest struct {
	EventBusName *string `json:"EventBusName"`
	Name         string  `json:"Name"`
}
