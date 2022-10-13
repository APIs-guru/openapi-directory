package shared

type StartMlLabelingSetGenerationTaskRunRequest struct {
	OutputS3Path string `json:"OutputS3Path"`
	TransformID  string `json:"TransformId"`
}
