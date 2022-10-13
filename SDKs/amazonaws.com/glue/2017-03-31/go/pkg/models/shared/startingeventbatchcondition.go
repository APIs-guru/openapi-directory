package shared

type StartingEventBatchCondition struct {
	BatchSize   *int64 `json:"BatchSize"`
	BatchWindow *int64 `json:"BatchWindow"`
}
