package shared



type GameServerGroupAutoScalingPolicy struct {
    EstimatedInstanceWarmup *int64 `json:"EstimatedInstanceWarmup,omitempty"`
    TargetTrackingConfiguration TargetTrackingConfiguration `json:"TargetTrackingConfiguration"`
    
}

