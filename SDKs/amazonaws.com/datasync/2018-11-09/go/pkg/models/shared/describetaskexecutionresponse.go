package shared

import (
	"time"
)

type DescribeTaskExecutionResponse struct {
	BytesTransferred         *int64                     `json:"BytesTransferred,omitempty"`
	BytesWritten             *int64                     `json:"BytesWritten,omitempty"`
	EstimatedBytesToTransfer *int64                     `json:"EstimatedBytesToTransfer,omitempty"`
	EstimatedFilesToTransfer *int64                     `json:"EstimatedFilesToTransfer,omitempty"`
	Excludes                 []FilterRule               `json:"Excludes,omitempty"`
	FilesTransferred         *int64                     `json:"FilesTransferred,omitempty"`
	Includes                 []FilterRule               `json:"Includes,omitempty"`
	Options                  *Options                   `json:"Options,omitempty"`
	Result                   *TaskExecutionResultDetail `json:"Result,omitempty"`
	StartTime                *time.Time                 `json:"StartTime,omitempty"`
	Status                   *TaskExecutionStatusEnum   `json:"Status,omitempty"`
	TaskExecutionArn         *string                    `json:"TaskExecutionArn,omitempty"`
}
