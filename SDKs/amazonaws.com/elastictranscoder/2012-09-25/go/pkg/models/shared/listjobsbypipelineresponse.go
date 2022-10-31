package shared

type ListJobsByPipelineResponse struct {
	Jobs          []Job   `json:"Jobs,omitempty"`
	NextPageToken *string `json:"NextPageToken,omitempty"`
}
