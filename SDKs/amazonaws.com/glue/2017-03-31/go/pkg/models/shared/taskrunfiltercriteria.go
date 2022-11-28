package shared

import (
	"time"
)

// TaskRunFilterCriteria
// The criteria that are used to filter the task runs for the machine learning transform.
type TaskRunFilterCriteria struct {
	StartedAfter  *time.Time          `json:"StartedAfter,omitempty"`
	StartedBefore *time.Time          `json:"StartedBefore,omitempty"`
	Status        *TaskStatusTypeEnum `json:"Status,omitempty"`
	TaskRunType   *TaskTypeEnum       `json:"TaskRunType,omitempty"`
}
