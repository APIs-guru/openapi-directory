package shared

type ListImagePipelinesResponse struct {
	ImagePipelineList []ImagePipeline `json:"imagePipelineList"`
	NextToken         *string         `json:"nextToken"`
	RequestID         *string         `json:"requestId"`
}
