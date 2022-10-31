package shared



type ListImagePipelinesResponse struct {
    ImagePipelineList []ImagePipeline `json:"imagePipelineList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

