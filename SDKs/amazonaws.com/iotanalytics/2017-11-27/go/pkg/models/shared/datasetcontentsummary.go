package shared

import (
	"time"
)

type DatasetContentSummary struct {
	CompletionTime *time.Time            `json:"completionTime"`
	CreationTime   *time.Time            `json:"creationTime"`
	ScheduleTime   *time.Time            `json:"scheduleTime"`
	Status         *DatasetContentStatus `json:"status"`
	Version        *string               `json:"version"`
}
