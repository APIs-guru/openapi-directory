package shared



type TCPRouteAction struct {
    WeightedTargets []WeightedTarget `json:"weightedTargets"`
    
}

