package shared

type ListPipelinesOutput struct {
	HasMoreResults *bool            `json:"hasMoreResults,omitempty"`
	Marker         *string          `json:"marker,omitempty"`
	PipelineIDList []PipelineIDName `json:"pipelineIdList"`
}
