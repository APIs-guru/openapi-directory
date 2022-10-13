package shared

type GetImagePipelineResponse struct {
	ImagePipeline *ImagePipeline `json:"imagePipeline"`
	RequestID     *string        `json:"requestId"`
}
