package shared



type GrpcRouteAction struct {
    WeightedTargets []WeightedTarget `json:"weightedTargets"`
    
}

