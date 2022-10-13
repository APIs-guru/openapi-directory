package shared

import (
	"time"
)

type GetMlTaskRunResponse struct {
	CompletedOn    *time.Time          `json:"CompletedOn"`
	ErrorString    *string             `json:"ErrorString"`
	ExecutionTime  *int64              `json:"ExecutionTime"`
	LastModifiedOn *time.Time          `json:"LastModifiedOn"`
	LogGroupName   *string             `json:"LogGroupName"`
	Properties     *TaskRunProperties  `json:"Properties"`
	StartedOn      *time.Time          `json:"StartedOn"`
	Status         *TaskStatusTypeEnum `json:"Status"`
	TaskRunID      *string             `json:"TaskRunId"`
	TransformID    *string             `json:"TransformId"`
}
