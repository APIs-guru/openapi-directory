package shared

// EcsTaskSet
//
//	Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.
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
