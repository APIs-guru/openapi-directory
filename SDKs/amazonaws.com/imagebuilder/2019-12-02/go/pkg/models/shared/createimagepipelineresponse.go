package shared

type CreateImagePipelineResponse struct {
	ClientToken      *string `json:"clientToken,omitempty"`
	ImagePipelineArn *string `json:"imagePipelineArn,omitempty"`
	RequestID        *string `json:"requestId,omitempty"`
}
