package shared

type UpdateImagePipelineResponse struct {
	ClientToken      *string `json:"clientToken"`
	ImagePipelineArn *string `json:"imagePipelineArn"`
	RequestID        *string `json:"requestId"`
}
