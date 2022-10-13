package shared

type ListPipelinesResponse struct {
	NextPageToken *string    `json:"NextPageToken"`
	Pipelines     []Pipeline `json:"Pipelines"`
}
