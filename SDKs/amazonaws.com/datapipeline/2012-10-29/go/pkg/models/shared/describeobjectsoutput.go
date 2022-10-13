package shared

type DescribeObjectsOutput struct {
	HasMoreResults  *bool            `json:"hasMoreResults"`
	Marker          *string          `json:"marker"`
	PipelineObjects []PipelineObject `json:"pipelineObjects"`
}
