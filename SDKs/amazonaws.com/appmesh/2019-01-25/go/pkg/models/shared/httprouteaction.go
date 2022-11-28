package shared

// HTTPRouteAction
// An object that represents the action to take if a match is determined.
type HTTPRouteAction struct {
	WeightedTargets []WeightedTarget `json:"weightedTargets"`
}
