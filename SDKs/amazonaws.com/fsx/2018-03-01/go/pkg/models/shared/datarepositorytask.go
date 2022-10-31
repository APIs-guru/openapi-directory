package shared

import (
"time")

type DataRepositoryTask struct {
    CreationTime time.Time `json:"CreationTime"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    FailureDetails *DataRepositoryTaskFailureDetails `json:"FailureDetails,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    Lifecycle DataRepositoryTaskLifecycleEnum `json:"Lifecycle"`
    Paths []string `json:"Paths,omitempty"`
    Report *CompletionReport `json:"Report,omitempty"`
    ResourceArn *string `json:"ResourceARN,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *DataRepositoryTaskStatus `json:"Status,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TaskID string `json:"TaskId"`
    Type DataRepositoryTaskTypeEnum `json:"Type"`
    
}

