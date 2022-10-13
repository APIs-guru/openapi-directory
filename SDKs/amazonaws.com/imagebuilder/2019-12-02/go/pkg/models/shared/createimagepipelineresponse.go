package shared

type CreateImagePipelineResponse struct {
	ClientToken      *string `json:"clientToken"`
	ImagePipelineArn *string `json:"imagePipelineArn"`
	RequestID        *string `json:"requestId"`
}
