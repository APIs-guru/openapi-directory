package shared

import (
	"time"
)

type TaskRunFilterCriteria struct {
	StartedAfter  *time.Time          `json:"StartedAfter"`
	StartedBefore *time.Time          `json:"StartedBefore"`
	Status        *TaskStatusTypeEnum `json:"Status"`
	TaskRunType   *TaskTypeEnum       `json:"TaskRunType"`
}
