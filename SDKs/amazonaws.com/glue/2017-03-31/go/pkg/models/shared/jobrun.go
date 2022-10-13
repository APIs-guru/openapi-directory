package shared

import (
	"time"
)

type JobRun struct {
	AllocatedCapacity     *int64                `json:"AllocatedCapacity"`
	Arguments             map[string]string     `json:"Arguments"`
	Attempt               *int64                `json:"Attempt"`
	CompletedOn           *time.Time            `json:"CompletedOn"`
	ErrorMessage          *string               `json:"ErrorMessage"`
	ExecutionTime         *int64                `json:"ExecutionTime"`
	GlueVersion           *string               `json:"GlueVersion"`
	ID                    *string               `json:"Id"`
	JobName               *string               `json:"JobName"`
	JobRunState           *JobRunStateEnum      `json:"JobRunState"`
	LastModifiedOn        *time.Time            `json:"LastModifiedOn"`
	LogGroupName          *string               `json:"LogGroupName"`
	MaxCapacity           *float64              `json:"MaxCapacity"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty"`
	NumberOfWorkers       *int64                `json:"NumberOfWorkers"`
	PredecessorRuns       []Predecessor         `json:"PredecessorRuns"`
	PreviousRunID         *string               `json:"PreviousRunId"`
	SecurityConfiguration *string               `json:"SecurityConfiguration"`
	StartedOn             *time.Time            `json:"StartedOn"`
	Timeout               *int64                `json:"Timeout"`
	TriggerName           *string               `json:"TriggerName"`
	WorkerType            *WorkerTypeEnum       `json:"WorkerType"`
}
