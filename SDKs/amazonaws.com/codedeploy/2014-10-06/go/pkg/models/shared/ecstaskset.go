package shared

type EcsTaskSet struct {
	DesiredCount  *int64           `json:"desiredCount"`
	Identifer     *string          `json:"identifer"`
	PendingCount  *int64           `json:"pendingCount"`
	RunningCount  *int64           `json:"runningCount"`
	Status        *string          `json:"status"`
	TargetGroup   *TargetGroupInfo `json:"targetGroup"`
	TaskSetLabel  *TargetLabelEnum `json:"taskSetLabel"`
	TrafficWeight *float64         `json:"trafficWeight"`
}
