package shared

type DeleteImagePipelineResponse struct {
	ImagePipelineArn *string `json:"imagePipelineArn,omitempty"`
	RequestID        *string `json:"requestId,omitempty"`
}
