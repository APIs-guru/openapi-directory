package shared

// EventBatchingCondition
// Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
type EventBatchingCondition struct {
	BatchSize   int64  `json:"BatchSize"`
	BatchWindow *int64 `json:"BatchWindow,omitempty"`
}
