package shared

// GrpcRouteAction
// An object that represents the action to take if a match is determined.
type GrpcRouteAction struct {
	WeightedTargets []WeightedTarget `json:"weightedTargets"`
}
