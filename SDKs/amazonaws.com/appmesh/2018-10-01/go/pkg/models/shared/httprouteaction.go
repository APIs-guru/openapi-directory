package shared

type HTTPRouteAction struct {
	WeightedTargets []WeightedTarget `json:"weightedTargets,omitempty"`
}
