package shared

import (
	"time"
)

type GetMlTaskRunResponse struct {
	CompletedOn    *time.Time          `json:"CompletedOn,omitempty"`
	ErrorString    *string             `json:"ErrorString,omitempty"`
	ExecutionTime  *int64              `json:"ExecutionTime,omitempty"`
	LastModifiedOn *time.Time          `json:"LastModifiedOn,omitempty"`
	LogGroupName   *string             `json:"LogGroupName,omitempty"`
	Properties     *TaskRunProperties  `json:"Properties,omitempty"`
	StartedOn      *time.Time          `json:"StartedOn,omitempty"`
	Status         *TaskStatusTypeEnum `json:"Status,omitempty"`
	TaskRunID      *string             `json:"TaskRunId,omitempty"`
	TransformID    *string             `json:"TransformId,omitempty"`
}
