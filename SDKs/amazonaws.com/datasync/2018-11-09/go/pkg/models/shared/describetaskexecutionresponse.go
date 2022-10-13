package shared

import (
	"time"
)

type DescribeTaskExecutionResponse struct {
	BytesTransferred         *int64                     `json:"BytesTransferred"`
	BytesWritten             *int64                     `json:"BytesWritten"`
	EstimatedBytesToTransfer *int64                     `json:"EstimatedBytesToTransfer"`
	EstimatedFilesToTransfer *int64                     `json:"EstimatedFilesToTransfer"`
	Excludes                 []FilterRule               `json:"Excludes"`
	FilesTransferred         *int64                     `json:"FilesTransferred"`
	Includes                 []FilterRule               `json:"Includes"`
	Options                  *Options                   `json:"Options"`
	Result                   *TaskExecutionResultDetail `json:"Result"`
	StartTime                *time.Time                 `json:"StartTime"`
	Status                   *TaskExecutionStatusEnum   `json:"Status"`
	TaskExecutionArn         *string                    `json:"TaskExecutionArn"`
}
