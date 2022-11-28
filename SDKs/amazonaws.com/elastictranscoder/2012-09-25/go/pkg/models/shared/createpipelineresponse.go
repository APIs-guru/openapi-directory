package shared

// CreatePipelineResponse
// When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
type CreatePipelineResponse struct {
	Pipeline *Pipeline `json:"Pipeline,omitempty"`
	Warnings []Warning `json:"Warnings,omitempty"`
}
