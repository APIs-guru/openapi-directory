package shared



type WorkflowRunStatistics struct {
    FailedActions *int64 `json:"FailedActions,omitempty"`
    RunningActions *int64 `json:"RunningActions,omitempty"`
    StoppedActions *int64 `json:"StoppedActions,omitempty"`
    SucceededActions *int64 `json:"SucceededActions,omitempty"`
    TimeoutActions *int64 `json:"TimeoutActions,omitempty"`
    TotalActions *int64 `json:"TotalActions,omitempty"`
    
}

