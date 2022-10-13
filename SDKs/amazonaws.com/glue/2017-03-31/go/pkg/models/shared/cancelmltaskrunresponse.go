package shared

type CancelMlTaskRunResponse struct {
	Status      *TaskStatusTypeEnum `json:"Status"`
	TaskRunID   *string             `json:"TaskRunId"`
	TransformID *string             `json:"TransformId"`
}
