package shared

type StartJobRunRequest struct {
	AllocatedCapacity     *int64                `json:"AllocatedCapacity,omitempty"`
	Arguments             map[string]string     `json:"Arguments,omitempty"`
	JobName               string                `json:"JobName"`
	JobRunID              *string               `json:"JobRunId,omitempty"`
	MaxCapacity           *float64              `json:"MaxCapacity,omitempty"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty,omitempty"`
	NumberOfWorkers       *int64                `json:"NumberOfWorkers,omitempty"`
	SecurityConfiguration *string               `json:"SecurityConfiguration,omitempty"`
	Timeout               *int64                `json:"Timeout,omitempty"`
	WorkerType            *WorkerTypeEnum       `json:"WorkerType,omitempty"`
}
