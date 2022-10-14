package shared

type EcsTaskSet struct {
	DesiredCount  *int64           `json:"desiredCount,omitempty"`
	Identifer     *string          `json:"identifer,omitempty"`
	PendingCount  *int64           `json:"pendingCount,omitempty"`
	RunningCount  *int64           `json:"runningCount,omitempty"`
	Status        *string          `json:"status,omitempty"`
	TargetGroup   *TargetGroupInfo `json:"targetGroup,omitempty"`
	TaskSetLabel  *TargetLabelEnum `json:"taskSetLabel,omitempty"`
	TrafficWeight *float64         `json:"trafficWeight,omitempty"`
}
