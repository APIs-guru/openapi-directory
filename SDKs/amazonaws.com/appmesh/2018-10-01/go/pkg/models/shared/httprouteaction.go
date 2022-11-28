package shared

// HTTPRouteAction
// An object representing the traffic distribution requirements for matched HTTP
//
//	requests.
type HTTPRouteAction struct {
	WeightedTargets []WeightedTarget `json:"weightedTargets,omitempty"`
}
