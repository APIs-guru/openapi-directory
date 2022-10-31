package shared

type GetMlTaskRunRequest struct {
	TaskRunID   string `json:"TaskRunId"`
	TransformID string `json:"TransformId"`
}
