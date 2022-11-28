package shared

import (
	"time"
)

// DatasetContentSummary
// Summary information about dataset contents.
type DatasetContentSummary struct {
	CompletionTime *time.Time            `json:"completionTime,omitempty"`
	CreationTime   *time.Time            `json:"creationTime,omitempty"`
	ScheduleTime   *time.Time            `json:"scheduleTime,omitempty"`
	Status         *DatasetContentStatus `json:"status,omitempty"`
	Version        *string               `json:"version,omitempty"`
}
