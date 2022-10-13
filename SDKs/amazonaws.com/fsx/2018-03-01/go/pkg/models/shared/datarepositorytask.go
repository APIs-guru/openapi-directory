package shared

import (
	"time"
)

type DataRepositoryTask struct {
	CreationTime   time.Time                         `json:"CreationTime"`
	EndTime        *time.Time                        `json:"EndTime"`
	FailureDetails *DataRepositoryTaskFailureDetails `json:"FailureDetails"`
	FileSystemID   string                            `json:"FileSystemId"`
	Lifecycle      DataRepositoryTaskLifecycleEnum   `json:"Lifecycle"`
	Paths          []string                          `json:"Paths"`
	Report         *CompletionReport                 `json:"Report"`
	ResourceArn    *string                           `json:"ResourceARN"`
	StartTime      *time.Time                        `json:"StartTime"`
	Status         *DataRepositoryTaskStatus         `json:"Status"`
	Tags           []Tag                             `json:"Tags"`
	TaskID         string                            `json:"TaskId"`
	Type           DataRepositoryTaskTypeEnum        `json:"Type"`
}
