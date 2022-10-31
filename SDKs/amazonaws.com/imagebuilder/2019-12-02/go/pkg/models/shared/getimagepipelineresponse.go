package shared

type GetImagePipelineResponse struct {
	ImagePipeline *ImagePipeline `json:"imagePipeline,omitempty"`
	RequestID     *string        `json:"requestId,omitempty"`
}
