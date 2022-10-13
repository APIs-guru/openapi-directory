package shared

type DescribeAnomalyResponse struct {
	ProactiveAnomaly *ProactiveAnomaly `json:"ProactiveAnomaly"`
	ReactiveAnomaly  *ReactiveAnomaly  `json:"ReactiveAnomaly"`
}
