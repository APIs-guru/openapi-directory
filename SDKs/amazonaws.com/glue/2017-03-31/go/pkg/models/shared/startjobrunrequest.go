package shared

type StartJobRunRequest struct {
	AllocatedCapacity     *int64                `json:"AllocatedCapacity"`
	Arguments             map[string]string     `json:"Arguments"`
	JobName               string                `json:"JobName"`
	JobRunID              *string               `json:"JobRunId"`
	MaxCapacity           *float64              `json:"MaxCapacity"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty"`
	NumberOfWorkers       *int64                `json:"NumberOfWorkers"`
	SecurityConfiguration *string               `json:"SecurityConfiguration"`
	Timeout               *int64                `json:"Timeout"`
	WorkerType            *WorkerTypeEnum       `json:"WorkerType"`
}
