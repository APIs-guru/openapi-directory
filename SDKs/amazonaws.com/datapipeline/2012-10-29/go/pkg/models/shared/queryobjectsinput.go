package shared

type QueryObjectsInput struct {
	Limit      *int64  `json:"limit"`
	Marker     *string `json:"marker"`
	PipelineID string  `json:"pipelineId"`
	Query      *Query  `json:"query"`
	Sphere     string  `json:"sphere"`
}
