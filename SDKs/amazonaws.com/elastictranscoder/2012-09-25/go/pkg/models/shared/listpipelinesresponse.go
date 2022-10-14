package shared

type ListPipelinesResponse struct {
	NextPageToken *string    `json:"NextPageToken,omitempty"`
	Pipelines     []Pipeline `json:"Pipelines,omitempty"`
}
