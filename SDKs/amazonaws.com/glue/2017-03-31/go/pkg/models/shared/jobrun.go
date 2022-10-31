package shared

import (
	"time"
)

type JobRun struct {
	AllocatedCapacity     *int64                `json:"AllocatedCapacity,omitempty"`
	Arguments             map[string]string     `json:"Arguments,omitempty"`
	Attempt               *int64                `json:"Attempt,omitempty"`
	CompletedOn           *time.Time            `json:"CompletedOn,omitempty"`
	ErrorMessage          *string               `json:"ErrorMessage,omitempty"`
	ExecutionTime         *int64                `json:"ExecutionTime,omitempty"`
	GlueVersion           *string               `json:"GlueVersion,omitempty"`
	ID                    *string               `json:"Id,omitempty"`
	JobName               *string               `json:"JobName,omitempty"`
	JobRunState           *JobRunStateEnum      `json:"JobRunState,omitempty"`
	LastModifiedOn        *time.Time            `json:"LastModifiedOn,omitempty"`
	LogGroupName          *string               `json:"LogGroupName,omitempty"`
	MaxCapacity           *float64              `json:"MaxCapacity,omitempty"`
	NotificationProperty  *NotificationProperty `json:"NotificationProperty,omitempty"`
	NumberOfWorkers       *int64                `json:"NumberOfWorkers,omitempty"`
	PredecessorRuns       []Predecessor         `json:"PredecessorRuns,omitempty"`
	PreviousRunID         *string               `json:"PreviousRunId,omitempty"`
	SecurityConfiguration *string               `json:"SecurityConfiguration,omitempty"`
	StartedOn             *time.Time            `json:"StartedOn,omitempty"`
	Timeout               *int64                `json:"Timeout,omitempty"`
	TriggerName           *string               `json:"TriggerName,omitempty"`
	WorkerType            *WorkerTypeEnum       `json:"WorkerType,omitempty"`
}
