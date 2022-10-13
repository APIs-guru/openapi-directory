package shared

type ListPipelinesOutput struct {
	HasMoreResults *bool            `json:"hasMoreResults"`
	Marker         *string          `json:"marker"`
	PipelineIDList []PipelineIDName `json:"pipelineIdList"`
}
