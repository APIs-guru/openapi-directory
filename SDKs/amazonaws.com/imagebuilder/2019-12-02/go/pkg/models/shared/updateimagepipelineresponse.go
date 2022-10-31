package shared

type UpdateImagePipelineResponse struct {
	ClientToken      *string `json:"clientToken,omitempty"`
	ImagePipelineArn *string `json:"imagePipelineArn,omitempty"`
	RequestID        *string `json:"requestId,omitempty"`
}
