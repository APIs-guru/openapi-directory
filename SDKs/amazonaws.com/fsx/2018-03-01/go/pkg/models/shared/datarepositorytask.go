package shared

import (
	"time"
)

// DataRepositoryTask
// A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository.
type DataRepositoryTask struct {
	CreationTime   time.Time                         `json:"CreationTime"`
	EndTime        *time.Time                        `json:"EndTime,omitempty"`
	FailureDetails *DataRepositoryTaskFailureDetails `json:"FailureDetails,omitempty"`
	FileSystemID   string                            `json:"FileSystemId"`
	Lifecycle      DataRepositoryTaskLifecycleEnum   `json:"Lifecycle"`
	Paths          []string                          `json:"Paths,omitempty"`
	Report         *CompletionReport                 `json:"Report,omitempty"`
	ResourceArn    *string                           `json:"ResourceARN,omitempty"`
	StartTime      *time.Time                        `json:"StartTime,omitempty"`
	Status         *DataRepositoryTaskStatus         `json:"Status,omitempty"`
	Tags           []Tag                             `json:"Tags,omitempty"`
	TaskID         string                            `json:"TaskId"`
	Type           DataRepositoryTaskTypeEnum        `json:"Type"`
}
