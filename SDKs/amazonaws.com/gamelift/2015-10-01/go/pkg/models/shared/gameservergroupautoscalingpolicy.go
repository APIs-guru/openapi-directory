package shared

type GameServerGroupAutoScalingPolicy struct {
	EstimatedInstanceWarmup     *int64                      `json:"EstimatedInstanceWarmup"`
	TargetTrackingConfiguration TargetTrackingConfiguration `json:"TargetTrackingConfiguration"`
}
