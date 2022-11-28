package shared

// TCPRouteAction
// An object that represents the action to take if a match is determined.
type TCPRouteAction struct {
	WeightedTargets []WeightedTarget `json:"weightedTargets"`
}
