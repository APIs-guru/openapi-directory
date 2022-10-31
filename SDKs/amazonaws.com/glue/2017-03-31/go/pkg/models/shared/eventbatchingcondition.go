package shared



type EventBatchingCondition struct {
    BatchSize int64 `json:"BatchSize"`
    BatchWindow *int64 `json:"BatchWindow,omitempty"`
    
}

