package shared

import (
	"time"
)

type TaskRunFilterCriteria struct {
	StartedAfter  *time.Time          `json:"StartedAfter,omitempty"`
	StartedBefore *time.Time          `json:"StartedBefore,omitempty"`
	Status        *TaskStatusTypeEnum `json:"Status,omitempty"`
	TaskRunType   *TaskTypeEnum       `json:"TaskRunType,omitempty"`
}
