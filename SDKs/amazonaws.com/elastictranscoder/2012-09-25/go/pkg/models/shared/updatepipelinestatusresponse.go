package shared

// UpdatePipelineStatusResponse
// When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
type UpdatePipelineStatusResponse struct {
	Pipeline *Pipeline `json:"Pipeline,omitempty"`
}
