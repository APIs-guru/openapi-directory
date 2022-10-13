package shared

type ListJobsByPipelineResponse struct {
	Jobs          []Job   `json:"Jobs"`
	NextPageToken *string `json:"NextPageToken"`
}
