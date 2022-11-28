package shared

// ListJobsByPipelineResponse
// The <code>ListJobsByPipelineResponse</code> structure.
type ListJobsByPipelineResponse struct {
	Jobs          []Job   `json:"Jobs,omitempty"`
	NextPageToken *string `json:"NextPageToken,omitempty"`
}
