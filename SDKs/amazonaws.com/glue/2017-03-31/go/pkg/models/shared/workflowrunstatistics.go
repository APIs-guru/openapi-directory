package shared

type WorkflowRunStatistics struct {
	FailedActions    *int64 `json:"FailedActions"`
	RunningActions   *int64 `json:"RunningActions"`
	StoppedActions   *int64 `json:"StoppedActions"`
	SucceededActions *int64 `json:"SucceededActions"`
	TimeoutActions   *int64 `json:"TimeoutActions"`
	TotalActions     *int64 `json:"TotalActions"`
}
