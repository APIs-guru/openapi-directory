package shared

type StartingEventBatchCondition struct {
	BatchSize   *int64 `json:"BatchSize,omitempty"`
	BatchWindow *int64 `json:"BatchWindow,omitempty"`
}
