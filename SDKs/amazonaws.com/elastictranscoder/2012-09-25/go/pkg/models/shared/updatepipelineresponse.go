package shared

// UpdatePipelineResponse
// When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
type UpdatePipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline,omitempty"`
	Warnings []Warning `json:"Warnings,omitempty"`
}
